import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaBeer, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="website-logo" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              PACKAGES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              CONTACT US
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              ABOUT
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
