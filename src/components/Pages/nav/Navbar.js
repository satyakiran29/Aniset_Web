import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../nav/Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from ".././nav/imgs/logo.jpg";
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="navbar-logo">
            <img src={logo} alt="Logo" className="logo-img"  />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#pricing"
                className="nav-links"
              >
                Pricing
              </a>
            </li>
          <li className="nav-item">
              <a
                href="#testimonials"
                className="nav-links"
              >
                Testimonials
              </a>
            </li>
             <li className="nav-item">
              <a
                href="#community"
                className="nav-links"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;