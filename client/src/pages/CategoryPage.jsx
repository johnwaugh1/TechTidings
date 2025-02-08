import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articlesData from "../data/articles.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    if (articlesData.articles[category]) {
      setArticles(articlesData.articles[category]); // Directly match category name
    } else {
      setArticles([]);
    }
  }, [category]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800">{category}</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {articles.slice(0, visibleCount).map((article, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
              <p className="text-gray-600 mt-2">
                {article.description || "No description available."}
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        {visibleCount < articles.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMore}
              className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
