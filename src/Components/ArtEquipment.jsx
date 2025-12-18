import React from 'react';
import './ArtEquipment.css';
import img1 from '../Assets/img/services-1.jpg';
import img2 from '../Assets/img/services-2.jpg';
import img3 from '../Assets/img/services-3.jpg';
import img4 from '../Assets/img/services-4.jpg';

export default function ArtEquipment() {
  const features = [
    {
      title: 'Personal Training',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.',
      image: img1
    },
    {
      title: 'Group Fitness Classes',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.',
      image: img2
    },
    {
      title: 'Strength Training',
      description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.',
      image: img3
    },
    {
      title: 'Body Building',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.',
      image: img4
    }
  ];

  return (
    <section className="ArtEquipment-section">
      <div className="ArtEquipment-container">
        {/* Heading Section */}
        <h2 className="ArtEquipment-title">
          Services <br />
          <span className="highlighted-text">Inspire Your Best Self</span>
        </h2>
        <p className="ArtEquipment-subtitle">
          We're Your Partner In Achieving A Healthier, Stronger, And More Confident You.
        </p>

        {/* All Cards in One Row */}
        <div className="ArtEquipment-Card">
          {features.map((feature, index) => (
            <div key={index} className="ArtEquipment-Item">
              <div className="ArtEquipment-img">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="ArtEquipment-Text">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
                <button>EXPLORE NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
