import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/skills";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";

export default function App() {
  // Smooth scroll on initial load if URL has a hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0); // Delay ensures React has rendered
      }
    }
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
