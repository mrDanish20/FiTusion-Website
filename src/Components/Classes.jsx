import React from "react";
import "./Classes.css";
import Classdetail from '../Assets/img/class-detailsl.jpg'


export default function Classes() {
    return (
        <section className="Classes-section">
            <div className="Classes-container">
                {/* Left side image */}
                <div className="Classes-image">
                    <img src={Classdetail} alt="Yoga Pose" />
                    {/* <div className="play-btn">
            <i className="fa-solid fa-play"></i>
          </div> */}
                </div>

                {/* Right side content */}
                <div className="Classes-content">
                    <h4 className="Classes-us-text">Categories</h4>
                    {/* <h2 className="Classes-title">Whatsad WE HAVE DONE</h2>  */}
                    <p className="Classes-description">
                        Explore a variety of gym classes designed to fit every fitness level — from high-intensity strength training and fat-burning cardio to calming yoga and flexibility sessions. Each class is led by certified trainers who focus on proper technique, motivation, and results. Whether you’re looking to build muscle, lose weight, or stay active, our classes keep you challenged, engaged, and inspired every day.
                    </p>


                    {/* Progress Bars */}
                    <div className="progress-item">
                        <span>Yoga</span>
                        <span className="percent">12</span>
                        {/* <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "80%" }}></div>
                        </div> */}
                    </div>

                    <div className="progress-item">
                        <span>Running</span>
                        <span className="percent">32</span>
                        {/* <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "85%" }}></div>
                        </div> */}
                    </div>

                    <div className="progress-item">
                        <span>Weightloss</span>
                        <span className="percent">86</span>
                        {/* <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "75%" }}></div>
                        </div> */}
                    </div>

                      <div className="progress-item">
                        <span>Cario</span>
                        <span className="percent">25</span>
                        {/* <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "75%" }}></div>
                        </div> */}
                    </div>
                      <div className="progress-item">
                        <span>Body Building</span>
                        <span className="percent">36</span>
                        {/* <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "75%" }}></div>
                        </div> */}
                    </div>

                      <div className="progress-item">
                        <span>Nutrition</span>
                        <span className="percent">15</span>
                        {/* <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "75%" }}></div>
                        </div> */}
                    </div>

                    
                    
                </div>


            </div>
        </section>
    );
}
