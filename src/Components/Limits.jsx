import React from "react";
import "./Limits.css";
import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaRunning } from "react-icons/fa";

export default function Limits() {
  return (
    <section className="limits-section">
      <div className="limits-container">
        {/* Heading */}
        <div className="limits-header">
          <h2 className="limits-title">
            Discover<br />
            <span className="highlighted-text">Why Chosses Us !</span>
          </h2>
          <p className="limits-subtitle">
            We Deliver A Fitness Experience That's Truly One-Of-A-Kind. Explore How<br />
            We Help You Achieve Your Goals Faster And Smarter.
          </p>
        </div>

        {/* Features Row */}
        <div className="limits-features">
          <div className="feature-box">
            <div className="icon-circle">
              <FaRunning className="feature-icon" />
            </div>
            <h3>Modern equipment</h3>
            <p>
              Our gym is equipped with the latest fitness technology, helping you train efficiently and stay motivated.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-circle">
              <FaAppleAlt className="feature-icon" />
            </div>
            <h3>Healthy nutrition plan</h3>
            <p>
              We provide expert-designed meal plans to ensure your diet supports your fitness goals and boosts recovery.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-circle">
              <FaDumbbell className="feature-icon" />
            </div>
            <h3>Professional training plan</h3>
            <p>
              Get a personalized training plan designed by professional coaches to help you achieve results faster.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-circle">
              <FaHeartbeat className="feature-icon" />
            </div>
            <h3>Unique to your needs</h3>
            <p>
              Every workout and plan is customized to fit your goals, fitness level, and preferences for maximum results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
