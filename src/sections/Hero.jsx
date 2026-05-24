import React, { useEffect, useRef, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import avatarImg from '../assets/avatar.png';
import './Hero.css';

const Hero = () => {
    const canvasRef = useRef(null);
    const roles = ["MCA Graduate Student", "Frontend Developer", "AI & ML Enthusiast"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing Effect
    useEffect(() => {
        let timer;
        const currentRole = roles[currentRoleIndex];
        const typingSpeed = isDeleting ? 30 : 80;

        if (!isDeleting && currentText === currentRole) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timer = setTimeout(() => {
                setCurrentText(
                    isDeleting
                        ? currentRole.substring(0, currentText.length - 1)
                        : currentRole.substring(0, currentText.length + 1)
                );
            }, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIndex]);

    // Canvas Particles Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        const particles = [];
        const particleCount = Math.min(60, Math.floor((width * height) / 25000));

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let mouseX = null;
        let mouseY = null;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseX = null;
            mouseY = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.07 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }

                if (mouseX !== null && mouseY !== null) {
                    const dx = particles[i].x - mouseX;
                    const dy = particles[i].y - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 200) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouseX, mouseY);
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.12 * (1 - dist / 200)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="home" className="hero-section">
            <canvas ref={canvasRef} className="hero-canvas" />
            <div className="container hero-content">
                <div className="hero-text-block">
                    <div className="status-badge animate-fade-in">
                        <span className="status-dot"></span>
                        <span className="status-text-label">Open to opportunities</span>
                    </div>
                    <h2 className="greeting animate-fade-in">Hello, I'm Abhinand</h2>
                    <h1 className="main-heading animate-fade-in delay-100">
                        Building <span className="text-gradient">Digital Experiences</span>
                    </h1>
                    <h3 className="typing-role animate-fade-in delay-200">
                        I am a <span className="typed-text">{currentText}</span><span className="typing-cursor">|</span>
                    </h3>
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

                <div className="hero-avatar-block animate-fade-in delay-200">
                    <div className="avatar-glowing-wrapper">
                        <img src={avatarImg} alt="Abhinand Profile" className="hero-avatar" />
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
        </section>
    );
};

export default Hero;
