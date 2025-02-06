import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <main className="min-h-screen bg-gray-100">
            <section
                id="header"
                className="px-6 lg:px-8 py-6 flex justify-between items-center"
            >
                <h1 className="text-4xl font-bold text-gray-800">
                    Tech<span className="text-blue-500">Tidings</span>
                </h1>
                <nav>
                    <ul className="flex gap-6 font-medium text-gray-800 text-lg">
                        <li className="hover:text-blue-500 cursor-pointer">AI/ML</li>
                        <li className="hover:text-blue-500 cursor-pointer">Cybersecurity</li>
                        <li className="hover:text-blue-500 cursor-pointer">Tech Industry</li>
                        <li className="hover:text-blue-500 cursor-pointer">Future Tech</li>
                        <li className="hover:text-blue-500 cursor-pointer">Hardware</li>
                    </ul>
                </nav>
            </section>
            <section
                id="hero"
                className="mt-56 mb-96 flex flex-col lg:flex-row items-center justify-center px-8 py-8"
            >
                <div className="max-w-xl text-center lg:text-left mr-16">
                    <h2 className="text-6xl font-bold text-gray-900">
                        Stay Ahead in Tech with <span className="text-blue-500">TechTidings</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-700">
                        Your go-to source for the latest updates in AI, cybersecurity,
                        the tech industry, and emerging innovations. Stay informed, stay ahead.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0">
                    <div className="bg-blue-500 p-6 rounded-full shadow-lg flex items-center justify-center">
                        <IoNewspaperOutline className="text-white text-9xl" />
                    </div>
                </div>
                <div className="absolute bottom-12">
                    <Link
                        to="about"
                        smooth={true}
                        duration={800}
                        className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition"
                    >
                        Read More
                    </Link>
                </div>
            </section>
            <section
                id="about"
                className="pt-40 px-8 text-center lg:text-left flex items-center justify-center"
            >
                <div className="max-w-3xl mx-auto mb-40">
                    <h2 className="text-4xl font-bold text-gray-900">
                        What is Tech<span className="text-blue-500">Tidings</span>?
                    </h2>
                    <p className="mt-4 text-lg text-gray-700">
                        TechTidings is a platform designed to keep tech enthusiants, students, and
                        professionals up to date with the latest trends in AI, Cybersecurity, Embedded Systems, 
                        the tech industry, and future innovations. 
                    </p>
                    <h3 className="mt-6 text-2xl font-semibold text-gray-900">My Mission</h3>
                    <p className="mt-4 text-lg text-gray-700">
                        My goal for this project was to create a site that gathered tech news from 
                        various credible sources, all in one place for easy access. I plan to
                        explore how I can make this an open source project where many developers can
                        work on improving the platform.
                    </p>
                    <h3 className="mt-6 text-2xl font-semibold text-gray-900">How it Started</h3>
                    <p className="mt-4 text-lg text-gray-700">
                        The idea for this project came to me in a senior seminar class, where the first
                        thing we would do each day was discuss the latest tech headlines. I often came to
                        class not knowing what to talk about, because my news feed was taken over by sports,
                        etc. Thus, TechTidings was born as a solution to my problem. 
                    </p>
                </div>
            </section>
            <section
                id="footer"
                className="px-6 lg:px-8 py-6 flex justify-between items-center"
            >
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
        </main>
    );
};

export default Home;
