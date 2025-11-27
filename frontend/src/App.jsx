import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import BentoGrid from './components/BentoGrid';
import Contact from './components/Contact';
import Dock from './components/Dock';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen bg-[#0d1224] text-slate-100 selection:bg-pink-500/30 selection:text-pink-200">
      <div className="noise-overlay" />
      
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <BentoGrid />
      <About />
      <Contact />
      <Footer />
      <Dock />
    </main>
  );
}

export default App;
