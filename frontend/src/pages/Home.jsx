import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Impact from "../components/Impact";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WelcomeSection from "../components/Welcom";
import TeamSection from "../components/TeamSection";
import QuoteSection from "../components/Quote";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(()=>{
    const handleShortcut=(e) =>{
      if(
        e.ctrlKey &&
        e.shiftKey &&
        e.key.toLowerCase() === "l"
      ){
        navigate("/admin/login");
      }
    };

    window.addEventListener("keydown",handleShortcut );
    return ()=>{
      window.removeEventListener("keydown",handleShortcut);
    };
  },[navigate]);
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WelcomeSection/>
      <TeamSection/>
      <QuoteSection/>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;