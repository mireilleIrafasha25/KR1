import About from "./About";
import Service from "./services";
import "../styles/home.css";
const Home=()=>
{
    return(
      <div>
      <div id="home" class="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hello">Hello, Welcome</p>
          <h2>I’m Mireille Irafasha</h2>
          <div className="hero-paragraph"><p>A passionate Backend Developer specializing in building robust, scalable, and secure systems,<br />With expertise in Node.js, TypeORM, Docker, and database management, I bring backend solutions to life.</p></div>
          
          <a href="#" class="btn">Contact Me</a>
        </div>
        <div className="hero-image">
          <img src="/mimi.jpg" alt="Mireille Irafasha" />
        </div>
      </div>
    </div>
    <About /> 
    <Service />
    </div>
    )
}
export default  Home;