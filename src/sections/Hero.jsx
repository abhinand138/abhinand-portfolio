import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-content">
                <h2 className="greeting animate-fade-in">Hello, I'm Abhinand</h2>
                <h1 className="main-heading animate-fade-in delay-100">
                    Building <span className="text-gradient">Digital Experiences</span> that matter.
                </h1>
                <p className="sub-text animate-fade-in delay-200">
                    A passionate Frontend Developer specializing in building exceptional digital experiences.
                    Currently focused on creating accessible, human-centered products.
                </p>

                <div className="cta-group animate-fade-in delay-300">
                    <a href="#projects" className="btn btn-primary">Check out my work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                    <a href="/resume.pdf" download="Abhinand_Resume.pdf" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Resume <FaFileDownload />
                    </a>
                </div>
            </div>

            {/* Background Decor */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
        </section>
    );
};

export default Hero;
