import Header from "../components/Header"; 
import Hero from "../components/Hero"; 
import About from "../components/About"; 
import Footer from "../components/Footer"; 

const Home = () => {
    return (
        <main className="min-h-screen bg-gray-100">
            <Header />
            <Hero />
            <About />
            <Footer />
        </main>
    );
};

export default Home;
