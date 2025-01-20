import json
import re

# Path to the articles.json file
articles_file = "../../client/public/articles.json"

# Function to validate titles based on heuristics
def is_valid_title(title):
    if not title:
        return False
    
    # Heuristic: Minimum title length (e.g., 3 words or 15 characters)
    if len(title.split()) <= 4:
        return False
    
    # Heuristic: Avoid generic single-word or short titles
    generic_words = {"news", "categories", "applications", "chatbots", "virtual assistants", "voice recognition", "face recognition", "advertise", "content", "newsletter"}
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

def fix_concatenated_words(title):
    # Add a space between lowercase and uppercase letters (e.g., "BreakingNews" -> "Breaking News")
    title = re.sub(r'([a-z])([A-Z])', r'\1 \2', title)
    
    # Add a space between letters and numbers (e.g., "Tech2025" -> "Tech 2025")
    title = re.sub(r'([a-zA-Z])(\d)', r'\1 \2', title)
    title = re.sub(r'(\d)([a-zA-Z])', r'\1 \2', title)
    
    # Remove extra spaces caused by these adjustments
    title = re.sub(r'\s+', ' ', title).strip()
    
    return title

# Function to clean unnecessary phrases from titles
def clean_title(title):
    # Remove phrases like "12 days ago"
    title = re.sub(r"\b(\d+)\s+(seconds?|minutes?|hours?|days?|weeks?|months?|years?)\s+ago\b", "", title, flags=re.IGNORECASE)
    
    # Fix concatenated words
    title = fix_concatenated_words(title)
    
    # Remove extra whitespace caused by the removal
    title = re.sub(r"\s+", " ", title).strip()
    
    return title


# Function to clean the description by removing titles and author tags
def clean_description(description, title):
    # Remove the title from the description if it exists
    description = description.replace(title, "").strip()
    
    # Regex to remove common author tags (e.g., "By John Doe", "Author: Jane Smith")
    description = re.sub(r"\b(By|Author|Written by|Reported by|Posted by)\b.*", "", description, flags=re.IGNORECASE).strip()
    
    # Remove excessive whitespace
    description = re.sub(r"\s+", " ", description).strip()
    
    return description

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
            # Clean the title
            article["title"] = clean_title(article["title"])
            
            # Validate the cleaned title and URL
            if is_valid_title(article["title"]) and is_valid_url(article["link"]):
                # Clean the description
                article["description"] = clean_description(article["description"], article["title"])
                filtered_articles.append(article)
        filtered_data["articles"][topic] = filtered_articles

    # Save the filtered data back to articles.json
    with open(articles_file, "w") as file:
        json.dump(filtered_data, file, indent=4)

    print(f"Filtered articles saved to {articles_file}")



# Run the script
if __name__ == "__main__":
    filter_articles()
