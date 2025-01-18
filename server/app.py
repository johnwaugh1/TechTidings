from flask import Flask, jsonify
import os
import json

app = Flask(__name__)

@app.route("/api/articles", methods=["GET"])
def get_articles():
    try:
        # Read from articles.json
        articles_path = os.path.join(os.path.dirname(__file__), "static/articles.json")
        with open(articles_path, "r") as file:
            articles = json.load(file)
        return jsonify(articles)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
