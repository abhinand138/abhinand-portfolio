import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';

import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import CV from './sections/CV';

function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealedElements = document.querySelectorAll('.reveal');
    revealedElements.forEach(el => observer.observe(el));

    return () => revealedElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Certificates />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
