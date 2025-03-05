import google.generativeai as genai
import json
import requests
import os

def generate_repo_descriptions(api_url, output_file="projects.json"):
    """Generates descriptions for all repositories from a GitHub API search and writes to a JSON file."""

    # Retrieve the API key from the environment variable
    api_key = os.environ.get("GEMINI_API_KEY")

    # Check if the API key is available
    if not api_key:
        print("Error: GEMINI_API_KEY not found in environment variables.")
        return

    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-2.0-flash')

    try:
        response = requests.get(api_url)
        response.raise_for_status()
        repo_data = response.json()
        repos = repo_data["items"]

        descriptions = []
        for repo in repos:
            repo_name = repo["name"]
            repo_url = repo["html_url"]
            languages_url = repo["languages_url"]
            languages_response = requests.get(languages_url)
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
    api_url = f"https://api.github.com/search/repositories?q=user:${os.environ.get('GITHUB_REPOSITORY_OWNER')}+topic:project"
    generate_repo_descriptions(api_url)