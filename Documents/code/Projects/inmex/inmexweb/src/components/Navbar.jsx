import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link>
            <img src={Logo} alt="Website-logo" />
          </Link>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Propiedades
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Contacto
            </Link>
          </li>
        </ul>

        <div className="hamburger">
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
