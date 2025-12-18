import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <section className="Form-section">
      <div className="Form-container">
        {/* Left Side */}
        <div className="Form-info">
          <h5 className="Form-subtitle">Contact Us</h5>
          <h2 className="Form-title">
            GET IN <span>TOUCH</span>
          </h2>
          <p className="Form-desc">
            Your go-to destination for personalized workouts, tailored meal plans,
            and expert fitness advice — all designed to help you push past limits
            and achieve lasting results. Whether you’re just starting your journey
            or looking to level up, we’re here to guide, support, and motivate you
            every step of the way.
          </p>

          <div className="info-text">
            <p><strong>Address:</strong> 333 Middle Winchendon Rd, Rindge, NH 03461</p>
            <p><strong>Phone:</strong> 125-711-811 | 125-668-886</p>
            <p><strong>Email:</strong> FiTusion@gmail.com</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="Form-form">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Website" />
            <textarea placeholder="Comment" rows="5"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
}
