import os
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
from collections import defaultdict

# Path to local HTML file
html_file = "/Users/tones/Desktop/www.strategyvault.com/index.html"  # Change to your actual path
output_dir = os.path.expanduser("~/Desktop/strategyvault-assets")
os.makedirs(output_dir, exist_ok=True)


# Load HTML content
with open(html_file, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

# Collect asset URLs
assets = set()

for tag in soup.find_all(["img", "script"]):
    src = tag.get("src") or tag.get("data-src")
    if src and src.startswith(("http", "//")):
        if src.startswith("//"):
            src = "https:" + src
            print(src)
        assets.add(src)

# Track duplicate file names
name_count = defaultdict(int)

# Download assets with filename collision handling
for url in sorted(assets):
    try:
        parsed_url = urlparse(url)
        base_name = os.path.basename(parsed_url.path)
        name_root, ext = os.path.splitext(base_name)

        # Handle duplicate names
        name_count[base_name] += 1
        if name_count[base_name] > 1:
            filename = f"{name_root}-{name_count[base_name]}{ext}"
        else:
            filename = base_name

        file_path = os.path.join(output_dir, filename)

        # Download and save
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        with open(file_path, "wb") as f:
            f.write(response.content)

        print(f"✅ Downloaded: {filename}")
    except Exception as e:
        print(f"❌ Failed: {url} ({e})")