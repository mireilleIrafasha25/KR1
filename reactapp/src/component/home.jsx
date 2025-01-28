import React from "react";
import "../styles/home.css";
const Home=()=>
{
    return(
      <div id="home" class="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hello">Hello, Welcome</p>
          <h2>I’m Mireille Irafasha</h2>
          <div className="hero-paragraph"><p>A passionate Backend Developer specializing in building robust, scalable, and secure systems,<br />With expertise in Node.js, TypeORM, Docker, and database management, I bring backend solutions to life.</p></div>
          
          <a href="#" class="btn">Contact Me</a>
        </div>
        <div className="hero-image">
          <img src="/mimilogo.png" alt="Mireille Irafasha" />
        </div>
      </div>
    </div>
    )
}
export default  Home;