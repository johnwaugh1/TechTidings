import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading articles...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Tech News</h1>
      {Object.keys(articles).map((topic) => (
        <div key={topic} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{topic}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles[topic].map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                link={article.link}
                description={article.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
