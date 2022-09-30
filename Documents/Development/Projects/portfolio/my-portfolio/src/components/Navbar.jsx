import React from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaTimes, FaBars } from "react-icons/fa";
import Logo from "../assets/logo.png";

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
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Contact
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
