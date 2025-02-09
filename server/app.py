from flask import Flask, jsonify
import os
import sys

# Add the scraper folder to sys.path so we can import from it
sys.path.append(os.path.join(os.path.dirname(__file__), "scraper"))

# Import scraper and filter functions
from scraper import scraper, filter

app = Flask(__name__)

# Function to run the scraper and filter
def run_scraper_and_filter():
    print("Running scraper...")
    scraper.scrape_articles()  # Runs the scraper function

    print("Filtering articles...")
    filter.filter_articles()  # Runs the filter function

# Run scraper and filter before starting the server
run_scraper_and_filter()

@app.route("/")
def home():
    return jsonify({"message": "TechTidings API is running!"})

if __name__ == "__main__":
    app.run(debug=True)
