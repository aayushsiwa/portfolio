import google.generativeai as genai
import json
import requests
import os
import argparse

def generate_repo_descriptions(api_url, api_key, github_token, output_file="projects.json"):
    """Generates descriptions for all repositories from a GitHub API search and writes to a JSON file."""

    # Configure Gemini AI with the provided API key
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-2.0-flash')

    headers = {"Authorization": f"token {github_token}"} if github_token else {}

    try:
        response = requests.get(api_url, headers=headers)
        response.raise_for_status()
        repo_data = response.json()
        repos = repo_data.get("items", [])

        descriptions = []
        for repo in repos:
            repo_name = repo["name"]
            repo_url = repo["html_url"]
            languages_url = repo["languages_url"]

            # Fetch repository languages with authentication
            languages_response = requests.get(languages_url, headers=headers)
            languages_response.raise_for_status()
            languages = list(languages_response.json().keys())

            language_string = ", ".join(languages)
            topics = repo.get("topics", [])
            topic_string = ", ".join(topics)
            homepage = repo.get("homepage", None)
            img_src = f"https://raw.githubusercontent.com/{repo['full_name']}/master/screenshot.png"

            prompt = f"""
            Generate a concise one-paragraph description for a GitHub repository.

            Repository Name: {repo_name}
            Languages Used: {language_string}
            Repository Topics: {topic_string}

            Create a description that highlights the purpose, technologies, and topics.
            """

            response = model.generate_content(prompt)
            generated_description = response.text

            descriptions.append({
                "title": repo_name,
                "description": generated_description,
                "imgSrc": img_src,
                "githubLink": repo_url,
                "liveLink": homepage
            })

        with open(output_file, "w") as f:
            json.dump(descriptions, f, indent=4)

        print(f"Repository descriptions written to {output_file}")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching repository data: {e}")
    except json.JSONDecodeError:
        print("API response could not be parsed as JSON")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate GitHub repository descriptions using Gemini AI.")
    parser.add_argument("--api_key", required=True, help="Gemini API key for generating descriptions.")
    parser.add_argument("--github_owner", required=True, help="GitHub username or organization to fetch repositories.")
    parser.add_argument("--github_token", required=True, help="GitHub Personal Access Token to avoid rate limits.")

    args = parser.parse_args()
    
    api_url = f"https://api.github.com/search/repositories?q=user:{args.github_owner}+topic:project"
    generate_repo_descriptions(api_url, args.api_key, args.github_token)
