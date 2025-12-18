import React from "react";
import "./WhatWeHaveDone.css";


export default function WhatWeHaveDone() {
  return (
    <section className="what-section">
      <div className="what-container">
        {/* Left side image */}
        <div className="what-image">
          <img src="https://www.shutterstock.com/image-photo/handsome-muscular-male-bodybuilder-posing-600nw-333385373.jpg" alt="Yoga Pose" />
          {/* <div className="play-btn">
            <i className="fa-solid fa-play"></i>
          </div> */}
        </div>

        {/* Right side content */}
        <div className="what-content">
          <h4 className="about-us-text">ABOUT US</h4>
          <h2 className="what-title">WHAT WE HAVE DONE</h2>
          <p className="what-description">
            We take pride in offering expert fitness training, customized diet
            plans, and holistic programs that help you achieve your fitness
            goals faster. Our journey is built on passion, consistency, and the
            trust of thousands of members who transformed their lives with us.
          </p>

          {/* Progress Bars */}
          <div className="progress-item">
            <span>Body Building</span>
            <span className="percent">80%</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="progress-item">
            <span>Training</span>
            <span className="percent">85%</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="progress-item">
            <span>Fitness</span>
            <span className="percent">75%</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
