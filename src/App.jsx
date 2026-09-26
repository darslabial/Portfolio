import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgressBar from './components/common/ScrollProgressBar';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <ThemeProvider>
      <div className="portfolio-root">
        <ScrollProgressBar />
        <Navbar />
        <main id="main-content">
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
