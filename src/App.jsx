import React from 'react';
import ScrollProgressBar from './components/common/ScrollProgressBar';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Playground from './components/sections/Playground';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="portfolio-root">
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Playground />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
