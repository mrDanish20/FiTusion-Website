import React from "react";
import "./Logos.css";
import underarmour from '../Assets/img/Under_armour_logo.svg'
import reebok from '../Assets/img/Reebok-logo-2048x1152.png'
import adidas from '../Assets/img/adidas-logo.png'
import puma from '../Assets/img/Puma-Logo.png'
import thenorthface from '../Assets/img//North-Face-Logo.png'
import nike from '../Assets/img/nike-logo.png'






export default function Logos() {
  const logos = [
    underarmour,
    reebok,
    adidas,
    puma,
    thenorthface,
    nike,
  ];

  return (
    <section className="logos-section">
      <div className="logos-container">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
