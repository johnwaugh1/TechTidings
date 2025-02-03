import { useParams } from "react-router-dom";
import articlesData from "../data/articles.json";
import ArticleCard from "../components/ArticleCard";
import { useState } from "react";

export default function CategoryPage() {
  const { name } = useParams();
  const articles = articlesData.articles[name] || [];
  
  const [visibleArticles, setVisibleArticles] = useState(6);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">{name}</h1>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {articles.slice(0, visibleArticles).map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      {visibleArticles < articles.length && (
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setVisibleArticles(visibleArticles + 6)}
        >
          Load More
        </button>
      )}
    </div>
  );
}
