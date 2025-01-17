import React from 'react';
import './css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Aniset</div>
      <ul className="nav-links">
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
