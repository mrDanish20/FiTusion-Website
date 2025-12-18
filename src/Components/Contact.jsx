import React from 'react';
import './Contact.css';

export default function Contacts() {
  return (
    <section className="contacts-section">
      <div className="contacts">
        <h2 className="contacts-title">Connect Engage Transform</h2>

        <p className="contacts-subtitle">
          Join a vibrant community where motivation fuels engagement and engagement drives transformation.
        </p>

        <div className="contacts-input">
          <input type="email" placeholder="Your Email" />
          <button className="join-now">Join Now</button>
        </div>
      </div>
    </section>
  );
}
