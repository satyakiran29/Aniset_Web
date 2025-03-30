import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/navbar.css"; // Import your CSS file for styling
import logo from "./css/logo.jpg"; // Import your logo image
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="navbar-logo">
            <img src={logo} alt="Logo" className="logo-img"  />
          </NavLink>
          <ul className="nav-links">
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#community">Contact</a></li>
      </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
