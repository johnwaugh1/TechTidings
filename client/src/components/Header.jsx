import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section id="header" className="px-6 lg:px-8 py-6 flex justify-between items-center">
            <Link to="/" className="text-4xl font-bold text-gray-800">
                Tech<span className="text-blue-500">Tidings</span>
            </Link>
            <nav>
                <ul className="flex gap-6 font-medium text-gray-800 text-lg">
                    <li>
                        <Link to="/category/AI & ML" className="hover:text-blue-500 transition-colors duration-500">
                            AI & ML
                        </Link>
                    </li>
                    <li>
                        <Link to="/category/Cybersecurity" className="hover:text-blue-500 transition-colors duration-500">
                            Cybersecurity
                        </Link>
                    </li>
                    <li>
                        <Link to="/category/Tech Industry" className="hover:text-blue-500 transition-colors duration-500">
                            Tech Industry
                        </Link>
                    </li>
                    <li>
                        <Link to="/category/Future Technologies" className="hover:text-blue-500 transition-colors duration-500">
                            Future Tech
                        </Link>
                    </li>
                    <li>
                        <Link to="/category/Hardware & Embedded Systems" className="hover:text-blue-500 transition-colors duration-500">
                            Hardware & Embedded Systems
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Header;
