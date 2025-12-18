import React, { useState } from "react";
import "./Hero.css";
import { FaClock, FaFireAlt, FaDumbbell } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import all images you want to slide
import heroImg1 from "../Assets/img/Hero.png";
import heroImg2 from "../Assets/img/Hero1.png";
import heroImg3 from "../Assets/img/Hero3.png";
import logo from '../Assets/img/logo.png'

export default function Hero() {
  const images = [heroImg1, heroImg2, heroImg3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="hero-section">
      <header className="hero-header">
        <div className="logo">
          <span>
           <Link to="/"><img className="logo-mark" src={logo} alt="FiTusion Logo" /></Link>
          </span>
          <span className="logo-text">FiTusion</span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/About" onClick={closeMenu}>About</Link>
          <Link to="/Features" onClick={closeMenu}>Features</Link>
          <Link to="/Services" onClick={closeMenu}>Service</Link>
          <Link to="/Exercise" onClick={closeMenu}>Exercise</Link>

          {/* Buttons inside mobile menu */}
          <div className="btns">
            <Link to="/Contactus"><button className="btn contact" onClick={closeMenu}>Contact Us</button></Link>
           <Link to="/Login"><button className="btn start" onClick={closeMenu}>Get Started</button></Link>
          </div>
        </nav>

        {/* Buttons outside menu (visible on desktop) */}
        <div className="btns">
          <Link to="/Contactus"><button className="btn contact">Contact Us</button></Link>
            <Link to="/Login"><button className="btn start">Get Started</button></Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      <div className="hero-body">
        <h1 className="hero-title">
          Sculpt <span>Your</span> Body,
          <br />
          Elevate <span>Your</span> Spirit
        </h1>

        {/* Side buttons */}
        <div className="side-text left" onClick={prevImage}>
          PREV
        </div>
        <div className="side-text right" onClick={nextImage}>
          NEXT
        </div>

        <div className="img-wrap">
          {/* Render current image */}
          <img
            src={images[currentIndex]}
            alt="hero"
            className="hero-image"
          />

          {/* stat cards */}
          <div className="stat-card top-left">
            <FaClock className="stat-icon" />
            <p>Hours</p>
            <h3>1.5</h3>
          </div>
          <div className="stat-card top-right">
            <GiMeditation className="stat-icon" />
            <p>Poses</p>
            <h3>20</h3>
          </div>
          <div className="stat-card bottom-left">
            <FaFireAlt className="stat-icon" />
            <p>Kcal</p>
            <h3>550</h3>
          </div>
          <div className="stat-card bottom-right">
            <FaDumbbell className="stat-icon" />
            <p>Sets</p>
            <h3>5</h3>
          </div>

          {/* avatars */}
          <div className="avatars">
            <img
              src="https://i.ytimg.com/vi/z11kZmnuMTE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAtNDv4HT8-9qzib59vUWXXieVmQQ"
              alt="avatar 1"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/1633/7705/files/Chris_Bumstead_supplements_480x480.jpg?v=1658503246"
              alt="avatar 2"
            />
            <img
              src="https://cdn.prod.website-files.com/60b5161b14fe760d9b751c45/645b3e26fd781a0fb172a263_cbum.jpeg"
              alt="avatar 3"
            />
            <div className="avatar-text">
              <h2>12k+</h2>
              <p>Happy Spirits</p>
            </div>
          </div>
     
          <Link to="/Login"><button className="cta">Let's Start &gt;&gt;&gt;</button></Link>
        </div>
      </div>
    </section>
  );
}