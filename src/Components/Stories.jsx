import React, { useState, useEffect } from 'react';
import './Stories.css';

export default function Stories() {
  const testimonials = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Chris_Bumstead_on_Gymshark.jpg",
      text: `"Fit Fusion completely transformed my mindset. The trainers push you just enough, and I feel stronger every week."`,
      name: "Chris Bumstead.",
      location: "LA, USA",
      rating: 5,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrWNgMCRXAc1NA6GvCx_0j4MNazQ4zDt7-w&s",
      text: `"The best fitness app I’ve ever used. It keeps me consistent, motivated, and the variety is unmatched."`,
      name: "Arnold Schwarzenegger.",
      location: "New York, USA",
      rating: 4,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGeqgop_HYmwvoVV1vobAXar7YZSkqNR5yw&s",
      text: `"Every workout feels personal and challenging. Fit Fusion truly changed my lifestyle."`,
      name: "Ronnie Coleman.",
      location: "Austin, USA",
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (!animating) {
      setAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prev = () => {
    if (!animating) {
      setAnimating(true);
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setAnimating(false), 500);
    return () => clearTimeout(t);
  }, [activeIndex]);

  const t = testimonials[activeIndex];

  return (
    <section className="stories-section">
      <h2 className="goals-title">
        Your Success <br /> Stories,
        <span className="highlighted-text"> Our Inspiration</span>
      </h2>
      <p className="goals-subtitle">
        See how our customers achieved their goals and let their journeys inspire you!
      </p>

      <div className="stories-slider">
        <button className="arrow left" onClick={prev}>‹</button>

        <div className={`stories-card ${animating ? 'fade' : ''}`}>
          <img src={t.img} alt={t.name} className="stories-img" />
          <div className="stories-content">
            <p className="stories-text">{t.text}</p>

            {/* ⭐ Star Rating */}
            <div className="stories-rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={i < t.rating ? 'star filled' : 'star'}
                >
                  ★
                </span>
              ))}
            </div>

            <div className="stories-author">
              <h4>{t.name}</h4>
              <span>{t.location}</span>
            </div>
          </div>
        </div>

        <button className="arrow right" onClick={next}>›</button>
      </div>
    </section>
  );
}
