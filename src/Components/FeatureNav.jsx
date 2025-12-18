import React, { useState } from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../Assets/img/logo.png";

export default function FeatureNav() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);



  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="aboutus-hero-section" >
      <header className="aboutus-hero-header">
        <div className="logo">
          <span>
               <Link to="/"><img className="logo-mark" src={logo} alt="FiTusion Logo" /></Link>
          </span>
          <span className="logo-text">FiTusion</span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/Features" onClick={closeMenu}>Features</Link>
          <Link to="/Services" onClick={closeMenu}>Service</Link>
          <Link to="/Exercise" onClick={closeMenu}>Exercise</Link>

          <div className="aboutus-btn">
            <Link to="/Contactus"><button className="btn contact">Contact Us</button></Link>
         <Link to="/Login"><button className="btn start">Get Started</button></Link>
          </div>
        </nav>

        <div className="aboutus-btn">
          <Link to="/Contactus"><button className="btn contact">Contact Us</button></Link>
          <Link to="/Login"><button className="btn start">Get Started</button></Link>
        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {/* <div className="aboutus-hero-body" >
        <h1 className="aboutus-hero-title">
          About <span>Us</span>
          <br />
          Home <span>-</span> About
        </h1>

        <div className="img-wrap"></div>
      </div> */}
    </section>
  );
}
