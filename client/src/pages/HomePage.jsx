import Header from "../components/Header"; 
import Hero from "../components/Hero"; 
import About from "../components/About"; 
import Footer from "../components/Footer"; 

const HomePage = () => {
    return (
        <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
            <Header />
            <Hero />
            <About />
            <Footer />
        </main>
    );
};

export default HomePage;
