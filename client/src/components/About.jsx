const About = () => {
    return (
        <section
            id="about" 
            className="pt-36 px-8 text-center lg:text-left flex items-center justify-center"
        >
            <div className="max-w-3xl mx-auto mb-48">
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
                    explore how I can make this an open source project where developers can
                    work together on improving the platform.
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
    );
};

export default About;