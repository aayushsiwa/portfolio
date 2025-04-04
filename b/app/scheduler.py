import time
import os
import datetime
import git
import shutil
from dotenv import load_dotenv

load_dotenv()

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
USERNAME = os.getenv("GITHUB_USERNAME")
REPO = os.getenv("REPO_NAME")
CLONE_URL = f"https://{USERNAME}:{GITHUB_TOKEN}@github.com/{USERNAME}/{REPO}.git"

REPO_DIR = f"./temp/{REPO}"
CRON_LOG_FILE = "./logs/cron.log"

def ensure_dirs():
    os.makedirs(os.path.dirname(CRON_LOG_FILE), exist_ok=True)
    os.makedirs(REPO_DIR, exist_ok=True)


def log_cron(message: str):
    ensure_dirs()
    with open(CRON_LOG_FILE, "a", encoding="utf-8") as log_file:
        timestamp = datetime.datetime.now().isoformat()
        log_file.write(f"[{timestamp}] {message}\n")


def get_repo():
    if os.path.exists(REPO_DIR):
        repo = git.Repo(REPO_DIR)
        repo.remote().pull()
    else:
        repo = git.Repo.clone_from(CLONE_URL, REPO_DIR)
    return repo


def update_log_and_push():
    try:
        log_cron("🚀 Starting log update...")
        repo = get_repo()

        log_path = os.path.join(REPO_DIR, "b", "log.txt")
        os.makedirs(os.path.dirname(log_path), exist_ok=True)

        timestamp = datetime.datetime.now().isoformat()
        with open(log_path, "a", encoding="utf-8") as f:
            f.write(f"{timestamp} - Automatic log entry\n")

        repo.git.add(all=True)
        repo.index.commit("🔁 Auto log update from FastAPI backend")
        repo.remote(name="origin").push()

        log_cron("✅ Log updated and pushed successfully.")
    except Exception as e:
        log_cron(f"❌ Error: {str(e)}")


def read_log_file():
    get_repo()
    log_path = os.path.join(REPO_DIR, "b", "log.txt")
    if os.path.exists(log_path):
        with open(log_path, "r", encoding="utf-8") as f:
            return f.read()
    else:
        return "Log file does not exist yet."


def read_cron_log():
    if os.path.exists(CRON_LOG_FILE):
        with open(CRON_LOG_FILE, "r", encoding="utf-8") as f:
            return f.read()
    return "Cron log is empty or not created yet."


def stream_cron_log():
    """Generator to stream cron.log like `tail -f`."""
    log_path = "./logs/cron.log"

    if not os.path.exists(log_path):
        yield "Cron log does not exist.\n"
        return

    with open(log_path, "r", encoding="utf-8") as f:
        f.seek(0, os.SEEK_END)
        while True:
            line = f.readline()
            if not line:
                time.sleep(1)
                continue
            yield line
