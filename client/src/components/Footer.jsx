import { Link } from "react-scroll";
import { useLocation, Link as RouterLink } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    return (
        <section 
            id="footer"
            className="px-6 lg:px-8 py-6 flex justify-between items-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
        >
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                Tech<span className="text-blue-500">Tidings</span>
                <p className="text-xs mt-2 ml-1 dark:text-gray-400">
                    2025 © John Waugh
                </p>
                <p className="text-xs ml-1 dark:text-gray-400">
                    All rights reserved.
                </p>
            </h1>
            <nav>
                <ul className="flex gap-6 font-medium text-gray-800 text-lg dark:text-gray-200">
                    <li className="hover:text-blue-500 cursor-pointer">
                        {location.pathname === "/" ? (
                            <Link to="header" smooth={true} duration={800}>
                                Home
                            </Link>
                        ) : (
                            <RouterLink to="/">Home</RouterLink>
                        )}
                    </li>
                    <li className="hover:text-blue-500 cursor-pointer">
                        <a href="https://github.com/johnwaugh1/TechTidings" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li className="hover:text-blue-500 cursor-pointer">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Footer;
