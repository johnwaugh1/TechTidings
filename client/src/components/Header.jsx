const Header = () => {
    return (
        <header className="px-6 lg:px-8 py-6 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800">
                Tech<span className="text-blue-500">Tidings</span>
            </h1>
            <nav>
                <ul className="flex gap-6 font-medium text-gray-800 text-lg">
                    <li className="hover:text-blue-500 cursor-pointer transition-colors duration-500">AI/ML</li>
                    <li className="hover:text-blue-500 cursor-pointer transition-colors duration-500">Cybersecurity</li>
                    <li className="hover:text-blue-500 cursor-pointer transition-colors duration-500">Tech Industry</li>
                    <li className="hover:text-blue-500 cursor-pointer transition-colors duration-500">Future Tech</li>
                    <li className="hover:text-blue-500 cursor-pointer transition-colors duration-500">Embedded Systems</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;