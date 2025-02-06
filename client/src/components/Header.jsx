import { Link } from "react-router-dom";

const Header = () => {
    const categories = ["AI/ML", "Cybersecurity", "Tech Industry", "Future Tech", "Embedded Systems"];

    return (
        <header className="px-6 lg:px-8 py-6 flex justify-between items-center">
            <Link to="/" className="text-4xl font-bold text-gray-800">
                Tech<span className="text-blue-500">Tidings</span>
            </Link>
            <nav>
                <ul className="flex gap-6 font-medium text-gray-800 text-lg">
                    {categories.map((category) => (
                        <li key={category}>
                            <Link
                                to={`/category/${encodeURIComponent(category)}`} // Ensure proper encoding
                                className="hover:text-blue-500 cursor-pointer transition-colors duration-300"
                            >
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
