const Footer = () => {
    return (
        <section className="px-6 lg:px-8 py-6 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800">
                Tech<span className="text-blue-500">Tidings</span>
                <p className="text-xs mt-2 ml-1">
                    2025 © John Waugh
                </p>
                <p className="text-xs ml-1">
                    All rights reserved.
                </p>
            </h1>
            <nav>
                <ul className="flex gap-6 font-medium text-gray-800 text-lg">
                    <li className="hover:text-blue-500 cursor-pointer">
                        <Link
                            to="header"
                            smooth={true}
                            duration={800}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-blue-500 cursor-pointer">
                        <a href="https://github.com/johnwaugh1/TechTidings" target="none">GitHub</a>
                    </li>
                    <li className="hover:text-blue-500 cursor-pointer">
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Footer;