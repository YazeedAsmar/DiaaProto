import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
