import os
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from urllib.parse import urljoin  # For handling relative URLs

script_dir = os.path.dirname(os.path.abspath(__file__))
topics_file = os.path.join(script_dir, "topics.json")

# Load topics and URLs from topics.json
with open(topics_file, "r") as file:
    topics = json.load(file)
    pass

# Output file
output_file = os.path.join(script_dir, "../../client/src/data/articles.json")
output_file = os.path.abspath(output_file)  # Get the absolute path

# Function to extract articles from any page
def scrape_articles(topic, url):
    print(f"Scraping {topic}: {url}")
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()  # Raise HTTPError for bad responses
        soup = BeautifulSoup(response.text, "html.parser")

        articles = []

        # Find all <a> tags with links
        for link_tag in soup.find_all("a", href=True):
            link = urljoin(url, link_tag["href"])  # Convert relative URL to absolute

            # Get the title from the <a> tag text
            title = link_tag.get_text(strip=True)

            # Find a nearby description (<p> tag or other text)
            parent = link_tag.find_parent()  # Get the parent container of the link
            if parent:
                # Look for a <p> tag or text inside the parent for the description
                description = None
                if parent.find("p"):
                    description = parent.find("p").get_text(strip=True)
                elif parent.get_text(strip=True):
                    description = parent.get_text(strip=True)

                # Avoid using overly long or generic descriptions
                if description and len(description) > 250:
                    description = description[:250] + "..."  # Truncate if too long
            else:
                description = "No description available."

            # Validate and clean data
            if title and link.startswith("http"):  # Ensure valid title and link
                articles.append({
                    "title": title,
                    "link": link,
                    "description": description
                })

        return articles

    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return []

# Main scraping logic
scraped_data = {"last_updated": datetime.now().isoformat(), "articles": {}}

for topic, urls in topics.items():
    scraped_data["articles"][topic] = []
    for url in urls:
        articles = scrape_articles(topic, url)
        scraped_data["articles"][topic].extend(articles)

# Save the scraped data to articles.json
with open(output_file, "w") as file:
    json.dump(scraped_data, file, indent=4)

print(f"Scraping complete. Data saved to {output_file}")
