import { Header } from "../components/Header"; 
import { Hero } from "../components/Hero"; 
import { About } from "../components/About"; 
import { Footer } from "../components/Footer"; 
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-scroll";

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
