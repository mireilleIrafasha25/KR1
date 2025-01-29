import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="wholeheader">
      <div className="wholenav">
        <div className="logo">
          <a>Mireille<b>I</b></a>
        </div>
        <div className="nav1">
          <nav>
            <ul className="nav-ul">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
