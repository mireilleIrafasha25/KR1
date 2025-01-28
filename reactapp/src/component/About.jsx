import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="container"> {/* Updated class to className */}
      <div className="about-content">
        <div className="about-image">
          <img src="/mimilogo.png" alt="Mireille Irafasha" />
        </div>
        <div className="about-text">
          <h2>
            <b style={{ color: "white" }}>About</b> Me
          </h2>
          <p>
            I’m a backend developer with expertise in creating scalable systems
            using Node.js, TypeORM, and Docker. As a certified Scrum Master, I
            excel in Agile environments, ensuring seamless team collaboration.
            Beyond tech, I run Catering Services, combining my passion for
            organization and creativity.
          </p>
          <a href="#contact-us" className="btn">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default About;
