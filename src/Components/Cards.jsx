import React from 'react';
import './Cards.css';

export default function Cards() {
  const plans = [
    {
      title: 'Class Drop In',
      price: '$39.0',
      duration: 'SINGLE CLASS',
      features: [
        'Free riding',
        ' Unlimited equipments',
        'Personal trainer',
        'Weight losing classes',
        'Month to mouth',
        'No time restriction'
      ]
    },
    {
      title: '12 Months Unlimited',
      price: '$99.0',
      duration: 'SINGLE CLASS',
      features: [
        'Unlimited gym access',
        'Group classes included',
        'Personal training session',
         'Free riding',
        ' Unlimited equipments',
        'Personal trainer',
      ]
    },
    {
      title: '6 Months Unlimited',
      price: '$59.0',
      duration: 'SINGLE CLASS',
      features: [
        'Unlimited gym access',
        'All group classes included',
        '3 Personal training sessions',
        'Free gym merchandise',
           'Personal trainer',
        'Weight losing classes',
  
      ]
    }
  ];

  return (
    <section className="Cards-section">
      <div className="Cards-container">
        {/* Heading */}
        <h2 className="Cards-title">
          Our Plan<br />
          <span className="highlighted-text">Choose your pricing plan</span>
        </h2>
        <p className="Cards-subtitle">
          We're Your Partner In Achieving A Healthier, Stronger, And More Confident You.
        </p>

        {/* Cards Grid */}
        <div className="Cards-grid">
          {plans.map((plan, index) => (
            <div key={index} className="Card">
              <h3 className="Card-title">{plan.title}</h3>
              <p className="Card-price">{plan.price}</p>
              <p className="Card-duration">{plan.duration}</p>
              <ul className="Card-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="Card-btn">Join Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
