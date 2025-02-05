const Home = () => {
    return (
        <section
            id="header"
            className="border-gray-200 px-6 lg:px-8 py-6 flex justify-between items-center"
        >
            <h1 className="text-4xl font-bold text-gray-800">
                Tech<span className="text-blue-500">Tidings</span>
            </h1>
            <nav>
                <ul className="flex gap-4 font-bold text-gray-800 text-lg">
                    <li>AI/ML</li>
                    <li>Cybersecurity</li>
                    <li>Tech Industry</li>
                    <li>Future Technologies</li>
                    <li>Hardware/Embedded Systems</li>
                </ul>
            </nav>

        </section>
    );
};

export default Home;