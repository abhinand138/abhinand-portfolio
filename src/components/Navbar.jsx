import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaPalette } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('abhinand-portfolio-theme') || 'violet';
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'CGPA', href: '#cgpa' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -55% 0px', // Trigger when section occupies the upper-middle of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(sec => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (theme === 'violet') {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', theme);
    }
    localStorage.setItem('abhinand-portfolio-theme', theme);
  }, [theme]);

  const themes = [
    { id: 'violet', color: '#8b5cf6', label: 'Violet Horizon' },
    { id: 'emerald', color: '#10b981', label: 'Emerald Surge' },
    { id: 'sunset', color: '#f43f5e', label: 'Sunset Glow' },
    { id: 'ocean', color: '#3b82f6', label: 'Electric Ocean' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo">Abhinand<span className="dot">.</span></a>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <div className="theme-selector-container">
            <span className="theme-label" title="Switch Theme"><FaPalette /></span>
            <div className="theme-dots">
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={`theme-dot ${theme === t.id ? 'active' : ''}`}
                  style={{ backgroundColor: t.color }}
                  onClick={() => setTheme(t.id)}
                  title={t.label}
                  aria-label={t.label}
                />
              ))}
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/abhinand138" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
          </div>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={activeSection === link.href.substring(1) ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-theme-selector">
            <span className="mobile-theme-title">Choose Accent Theme</span>
            <div className="theme-dots">
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={`theme-dot ${theme === t.id ? 'active' : ''}`}
                  style={{ backgroundColor: t.color }}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  title={t.label}
                  aria-label={t.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
