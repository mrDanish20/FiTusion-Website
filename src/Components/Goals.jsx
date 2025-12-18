import React from 'react';
import './Goals.css';
import trainer1 from '../Assets/img/Trainer1.png';
import trainer2 from '../Assets/img/Trainer2.png';
import trainer3 from '../Assets/img/Trainer3.png';

export default function Goals() {
  return (
    <section className="goals-section">
      <div className="goals-container">
        
        {/* Heading */}
        <h2 className="goals-title">
          Your Fitness <br />
          <span className="highlighted-text">Goals, Their Expertise</span>
        </h2>
        <p className="goals-subtitle">
          Our Team Of Certified Trainers Brings Unparalleled Expertise To Help You Achieve Your goals Goals.
        </p>

        {/* Trainers */}
        <div className="trainers-row">
          <div className="trainer-card">
            <img src={trainer1} alt="Blake Hunter" />
            <h3>Blake Hunter</h3>
          </div>

          <div className="trainer-card">
            <img src={trainer2} alt="Liam Crossfit" />
            <h3>Liam Crossfit</h3>
          </div>

          <div className="trainer-card">
            <img src={trainer3} alt="Logan Torque" />
            <h3>Logan Torque</h3>
          </div>
        </div>

        {/* Dots */}
        {/* <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div> */}
      </div>
    </section>
  );
}
