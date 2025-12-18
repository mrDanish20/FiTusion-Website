import React from 'react'
import './Footer.css'
import logo from '../Assets/img/logo.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <section className="footer-section">
            <div className="footer-logo">
                <span>
                    <img className="footer-logo-mark" src={logo} alt="FiTusion Logo" />
                </span>
                <span className="footer-logo-text">FiTusion</span>
            </div>

            <div className="footer-desc">
                <p>Your Go-To For Personalized <br />
                    Workouts, Meals Plans, And <br />
                    Expert Fitness Advice</p>
            </div>

            <div className="footer-icons">
                <h2>Follow Us On</h2>
                <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                </div>
            </div>

            <div className="footer-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Features">Features</a></li>
                    <li><a href="Services">Services</a></li>
                    <li><a href="Exercise">Exercise</a></li>
                </ul>
            </div>

            <div className="footer-contacts">
                <h2>Contact</h2>
                <p className='footer-text'>
                    Monday-Sunday <br />
                    8:00 AM To 5:00 PM <br />
                    Email <br />
                    FiTusion@gmail.com
                </p>

            </div>

        </section>
    )
}
