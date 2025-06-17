import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CV from './components/CV';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen relative overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <CV />
        <Contact />
      </main>
    </div>
  );
}

export default App;