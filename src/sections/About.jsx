import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import './About.css';

const About = () => {
    const skills = [
        { name: "HTML", icon: <FaHtml5 className="colored-icon html" /> },
        { name: "CSS", icon: <FaCss3Alt className="colored-icon css" /> },
        { name: "JavaScript", icon: <FaJs className="colored-icon js" /> },
        { name: "React", icon: <FaReact className="colored-icon react" /> },
        { name: "Python", icon: <FaPython className="colored-icon python" /> },
        { name: "Java", icon: <FaJava className="colored-icon java" /> },
        { name: "C", icon: <SiC className="colored-icon c" /> },
        { name: "C++", icon: <SiCplusplus className="colored-icon cpp" /> }
    ];

    const tools = [
        { name: "Git", icon: <FaGitAlt className="colored-icon git" /> },
        { name: "GitHub", icon: <FaGithub className="colored-icon github" /> },
        { name: "VS Code", icon: <VscCode className="colored-icon vscode" /> }
    ];

    const softSkills = [
        "Communication", "Problem-solving", "Teamwork", "Willingness to learn"
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title reveal">About Me</h2>

                <div className="about-content">
                    <div className="about-text reveal">
                        <p>
                            I am a motivated and detail-oriented individual with a strong interest in software development and technology.
                            I have hands-on experience with programming, web technologies, and version control tools like Git and GitHub.
                        </p>
                        <p>
                            I enjoy learning new skills, solving problems, and building practical solutions.
                            I am seeking opportunities to grow professionally and contribute to innovative projects.
                        </p>
                    </div>

                    <div className="skills-container reveal">
                        <div className="skill-category">
                            <h3 className="skills-title">Technical Skills:</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <div key={index} className="skill-card">
                                        <div className="skill-icon">{skill.icon}</div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="skill-category" style={{ marginTop: '2rem' }}>
                            <h3 className="skills-title">Tools:</h3>
                            <div className="skills-grid">
                                {tools.map((tool, index) => (
                                    <div key={index} className="skill-card">
                                        <div className="skill-icon">{tool.icon}</div>
                                        <span className="skill-name">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="skill-category" style={{ marginTop: '2rem' }}>
                            <h3 className="skills-title">Soft Skills:</h3>
                            <ul className="soft-skills-list">
                                {softSkills.map((item, index) => (
                                    <li key={index} className="soft-skill-item">▹ {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
