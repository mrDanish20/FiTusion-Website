import React from 'react';
import './Experience.css';
import enduranceImg from '../Assets/img/Experience1.png';
import speedImg from '../Assets/img/Experience2.png';
import { FaHeartbeat, FaRunning } from 'react-icons/fa';

export default function Experience() {
  return (
    <section className="fitness-section">
      <div className="fitness-container">
        
        {/* Heading */}
        <h2 className="fitness-title">
          Experience <br />
          <span className="highlighted-text">Fitness Like Never Before</span>
        </h2>
        <p className="fitness-subtitle">
          Transform The Way You Train With Innovative Workouts, Expert Guidance, And State-Of-The-Art Facilities.
        </p>

        {/* Cards */}
        <div className="fitness-cards" >
          
          {/* Card 1 */}
          <div className="fitness-card" >
            <div className="fitness-image">
              <img src={enduranceImg} alt="Endurance Training" />
            </div>
            <div className="fitness-content">
              <h3>Endurance Evolution</h3>
              <p>
                Boost your stamina and resilience with tailored cardio and endurance workouts designed to keep you moving stronger for longer.
              </p>
              <button className="fitness-btn">Read More</button>

              {/* Floating stat card near bottom */}
              <div className="fitness-stat stat-bottom">
                <div className="stat-icon">
                  <FaHeartbeat />
                </div>
                <p>BPM</p>
                <h3>95</h3>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="fitness-card fitness-second">
            <div className="fitness-image">
              <img src={speedImg} alt="Speed Training" />
            </div>
            <div className="fitness-content">
              <h3>Speed Surge</h3>
              <p>
                Boost your agility and explosiveness with high-intensity sprint and movement drills. Speed Surge is designed to take your performance to the next level.
              </p>
              <button className="fitness-btn">Read More</button>

              {/* Floating stat card near bottom */}
              <div className="fitness-stat stat-bottom stat-right">
                <div className="stat-icon">
                  <FaRunning />
                </div>
                <p>STEPS</p>
                <h3>1024</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
