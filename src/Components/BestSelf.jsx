import React from "react";
import "./BestSelf.css";
import { FaLeaf, FaCrown, FaUsers, FaChartLine, FaDumbbell } from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";
import heroImg from "../Assets/img/BestSelf.png";

export default function BestSelf() {
  return (
    <section className="bestself-section">
      <div className="bestself-container">
        {/* Heading */}
        <h2 className="bestself-title">
          Inspired to <br />
          <span className="highlighted-text">Inspire Your Best Self</span>
        </h2>
        <p className="bestself-subtitle">
          We're Your Partner In Achieving A Healthier, Stronger, And More Confident You.
        </p>

        {/* Features + Image */}
        <div className="bestself-content">
          <div className="bestself-features">
            <div className="feature-item">
              <FaLeaf className="icon" />
              <p>Nutrition Guidance</p>
            </div>
            <div className="feature-item">
              <MdFitnessCenter className="icon" />
              <p>Expert Trainers</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="icon" />
              <p>Progress Tracking</p>
            </div>
            <div className="feature-item">
              <FaCrown className="icon" />
              <p>Premium Membership</p>
            </div>
            <div className="feature-item">
              <FaUsers className="icon" />
              <p>Community Support</p>
            </div>
            <div className="feature-item">
              <FaDumbbell className="icon" />
              <p>Next-Level Fitness Spaces</p>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="bestself-image">
            <img src={heroImg} alt="Fitness Inspiration" />
          </div>
        </div>
      </div>
    </section>
  );
}
