import React from "react";
import "../styles/hero.css";
import { AiOutlineSearch } from "react-icons/ai";
import SelectDropdown from "../components/SelectDropdown";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Encuentra tu propiedad</h1>
          <p className="search-text">Propiedades en toda la zona del bajío.</p>
          <form className="search">
            <div className="search-bar">
              <SelectDropdown placeholder="Propiedad" />
            </div>
            <div className="radio">
              <input type="radio" checked />
              <label>Venta</label>
              <input type="radio" />
              <label>Renta</label>
              <button type="submit">
                {" "}
                <AiOutlineSearch className="icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero;
