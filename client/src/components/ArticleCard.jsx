const ArticleCard = ({ title, link, description }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4 hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description || "No description available."}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read more
        </a>
      </div>
    );
  };
  
  export default ArticleCard;
  