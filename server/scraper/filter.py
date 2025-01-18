import json
import re

# Path to the articles.json file
articles_file = "../static/articles.json"

# Function to validate titles based on heuristics
def is_valid_title(title):
    if not title:
        return False
    
    # Heuristic: Minimum title length (e.g., 3 words or 15 characters)
    if len(title.split()) < 3 or len(title) < 15:
        return False
    
    # Heuristic: Avoid generic single-word or short titles
    generic_words = {"news", "categories", "applications", "chatbots", "virtual assistants", "voice recognition", "face recognition", "advertise", "content", "newsletter", "1", "2", "3", "no", "comments", "days", "commentson"}
    if title.lower() in generic_words:
        return False
    
    # Heuristic: Check for natural sentence structure (contains at least one verb or preposition)
    common_words = {"is", "are", "was", "were", "has", "have", "in", "on", "at", "about", "for", "with", "from", "by", "to"}
    if not any(word in title.lower().split() for word in common_words):
        return False

    # Heuristic: Exclude titles with excessive non-alphanumeric characters
    if len(re.findall(r"\W", title)) > len(title) * 0.3:  # More than 30% non-alphanumeric
        return False
    
    return True

# Function to validate the URL based on certain patterns
def is_valid_url(url):
    # Heuristic: Check if URL contains common article indicators
    article_indicators = ['article', 'news', 'story', 'post', 'tech', 'blog', '2025', 'archive']
    # Check if URL contains these words or has a structure indicating an article
    if any(indicator in url.lower() for indicator in article_indicators):
        return True
    return False

# Function to clean up articles.json
def filter_articles():
    # Load the articles.json file
    with open(articles_file, "r") as file:
        data = json.load(file)
    
    filtered_data = {"last_updated": data["last_updated"], "articles": {}}
    
    # Iterate through topics and articles
    for topic, articles in data["articles"].items():
        filtered_articles = []
        for article in articles:
            # Only keep valid titles and valid URLs
            if is_valid_title(article["title"]) and is_valid_url(article["link"]):
                filtered_articles.append(article)
        filtered_data["articles"][topic] = filtered_articles

    # Save the filtered data back to articles.json
    with open(articles_file, "w") as file:
        json.dump(filtered_data, file, indent=4)

    print(f"Filtered articles saved to {articles_file}")

# Run the script
if __name__ == "__main__":
    filter_articles()
