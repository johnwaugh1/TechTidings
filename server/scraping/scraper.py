import requests
from bs4 import BeautifulSoup
import json

def scrape_source(source):
    """
    Scrape a single source for articles.
    Args:
        source (dict): A dictionary with 'url', 'article_selector', and 'description_selector'.
    Returns:
        list: A list of articles with title, link, and description.
    """
    url = source['url']
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    articles = []
    for article in soup.select(source['article_selector']):
        try:
            title = article.text.strip()
            link = article['href']
            if not link.startswith('http'):
                link = url + link

            # Extract description (if selector is provided)
            description = (
                soup.select_one(source['description_selector']).text.strip()
                if source.get('description_selector')
                else "No description"
            )
            articles.append({"title": title, "link": link, "description": description})
        except Exception as e:
            print(f"Error scraping article: {e}")
    return articles

def scrape_all_sources(sources_file="sources.json"):
    """
    Scrape all sources listed in the sources.json file.
    """
    with open(sources_file) as f:
        sources = json.load(f)
    all_articles = []
    for source in sources:
        all_articles.extend(scrape_source(source))
    return all_articles
