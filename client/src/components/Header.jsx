import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Check for saved dark mode preference in localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    };

    return (
        <section id="header" className="px-6 lg:px-8 py-6 flex justify-between items-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
            <Link to="/" className="text-4xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-500">
                Tech<span className="text-blue-500">Tidings</span>
            </Link>
            <nav>
                <ul className="flex gap-6 font-medium text-gray-800 text-lg dark:text-gray-200">
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
            <button
                onClick={toggleDarkMode}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-500"
                aria-label="Toggle dark mode"
            >
                {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
        </section>
    );
};

export default Header;
