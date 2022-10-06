import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import "../styles/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleOnclick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Website-logo" />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
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

        <div className="hamburger" onClick={handleOnclick}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
