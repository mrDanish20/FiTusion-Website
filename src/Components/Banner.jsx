import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-img">
        <img
          src="https://img.freepik.com/premium-photo/hes-one-strong-man-full-length-shot-handsome-young-man-doing-pushups-while-exercising-outside_590464-27078.jpg"
          alt="Fitness Banner"
        />

        {/* ✅ Text Overlay */}
        <div className="banner-content">
          <h2>Register Now To Get More Deals</h2>
          <p>Where health, beauty and fitness meet.</p>
          <button className="banner-btn">Join Now</button>
        </div>
      </div>
    </section>
  );
}
