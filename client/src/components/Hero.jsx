const Hero = () => {
    return (
        <section className="mt-56 mb-96 flex flex-col lg:flex-row items-center justify-center px-8 py-8">
            <div className="max-w-xl text-center lg:text-left mr-16">
                <h2 className="text-6xl font-bold text-gray-900">
                    Stay Ahead in Tech with Tech<span className="text-blue-500">Tidings</span>
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                    Your go-to source for the latest updates in AI, cybersecurity,
                    the tech industry, and emerging innovations. Stay informed, stay ahead.
                </p>
            </div>
            <div className="mt-8 lg:mt-0">
                <div className="bg-blue-500 p-6 rounded-full shadow-xl flex items-center justify-center">
                    <IoNewspaperOutline className="text-white text-9xl" />
                </div>
            </div>
            <div className="absolute bottom-12">
                <Link
                    to="about"
                    smooth={true}
                    duration={800}
                    className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-xl cursor-pointer hover:bg-blue-600 transition"
                >
                    Read More
                </Link>
            </div>
        </section>
    )
}

export default Hero