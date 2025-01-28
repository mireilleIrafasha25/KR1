import React from "react";
import "../styles/navbar.css"
const Navbar=()=>
{
  return (
    <header className="header">
        <div className="wholenav">
            <div className="logo">
            <a>Mireille<b>I</b></a>
        </div>
        <div className="nav1">
          <nav>
            <ul className="nav-ul">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portifolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          </div>
          </div>
          </header>
          
  )
}

export default Navbar;