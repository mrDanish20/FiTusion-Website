import React from "react";
import "./TrainSmarter.css";

import BarbellBasics from '../Assets/img/Barbell Basics.png'
import KettlebellMasterclass from '../Assets/img/Kettlebell Masterclass.png'
import CardioPowerBoost from '../Assets/img/Cardio Power Boost.png'
import Hypertrophy from '../Assets/img/Hypertrophy.png'
import RopeClimbing from '../Assets/img/Rope Climbing.png'
import TRXSuspension from '../Assets/img/TRX Suspension.png'


export default function TrainSmarter() {
  const courses = [
    { title: "Barbell Basics", img: BarbellBasics },
    { title: "Kettlebell Masterclass", img: KettlebellMasterclass },
    { title: "Cardio Power Boost", img: CardioPowerBoost },
    { title: "Hypertrophy", img: Hypertrophy },
    { title: "Rope Climbing", img: RopeClimbing },
    { title: "TRX Suspension", img: TRXSuspension },
  ];

  return (
    <section className="train-section">
      <div className="train-container">
        <h2 className="train-title">
          Train Smarter <br />
          <span className="highlighted-text">Unleash Your Potential</span>
        </h2>
        <p className="train-subtitle">
          Unlock Your Full Potential With Our Expertly Designed Courses, Tailored To Help You <br />
          Maximize Results In Less Time.
        </p>

        <div className="train-grid">
          {courses.map((course, index) => (
            <div key={index} className="train-card">
              <div className="card-img-wrapper">
                <img src={course.img} alt={course.title} />
                <div className="corner"></div>
              </div>
              <h3>{course.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
