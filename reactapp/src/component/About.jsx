import React from "react";
import "../styles/about.css"; 

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="/mimilogo.png" alt="Mireille Irafasha" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a backend developer with expertise in creating scalable systems
            using Node.js, TypeORM, and Docker. Beyond tech, I run Catering
            Services, combining my passion for organization and creativity.
          </p>
          <a href="#contact-us" className="btn">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default About;
