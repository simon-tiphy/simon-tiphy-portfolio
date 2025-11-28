import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import BentoGrid from "./components/BentoGrid";
import Contact from "./components/Contact";
import Dock from "./components/Dock";
import About from "./components/About";
import Footer from "./components/Footer";
import Approach from "./components/Approach";
import Testimonials from "./components/Testimonials";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="relative min-h-screen bg-[#0d1224] text-slate-100 selection:bg-pink-500/30 selection:text-pink-200">
      <div className="noise-overlay" />

      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Approach />
          <TechStack />
          <Experience />
          <BentoGrid />
          <About />
          <Testimonials />
          <Contact />
          <Dock />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
