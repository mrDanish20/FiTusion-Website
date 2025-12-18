import React, { useState, useEffect, useRef } from 'react';
import './Discover.css';

// Import icons
import { FaHeartbeat, FaDumbbell, FaFire, FaRunning } from 'react-icons/fa';

export default function Discover() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(1);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const cards = [
    {
      id: 1,
      icon: <FaHeartbeat />,
      title: "Cardio Training",
      description: "Boost endurance and heart health with high-energy cardio sessions designed to keep you moving",
      buttonText: "See Plan",
    },
    {
      id: 2,
      icon: <FaDumbbell />,
      title: "Strength Build",
      description: "Develop power and resilience through expert-guided strength training tailored to all fitness levels.",
      buttonText: "See Plan",
    },
    {
      id: 3,
      icon: <FaFire />,
      title: "Fat Loss",
      description: "Dynamic fat-burning routines and proven strategies to help you achieve lasting results.",
      buttonText: "See Plan",
    },
    {
      id: 5,
      icon: <FaRunning />,
      title: "HIIT Workouts",
      description: "Intense interval sessions crafted to maximize fat burn and skyrocket your fitness levels.",
      buttonText: "See Plan",
    },
    {
      id: 6,
      icon: <FaRunning />,
      title: "HIIT Pro",
      description: "Perfect for busy schedules, delivering quick yet powerful workouts that fit your day.",
      buttonText: "See Plan",
    },
    {
      id: 7,
      icon: <FaRunning />,
      title: "Endurance",
      description: "Skyrocket your stamina with endurance-focused training routines.",
      buttonText: "See Plan",
    },
    
  ];

  // Responsive: detect how many cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3); // Desktop
      else if (window.innerWidth >= 768) setCardsPerView(2); // Tablet
      else setCardsPerView(1); // Mobile
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerView);

  // Auto slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, totalSlides]);

  // Slide effect
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].offsetWidth + 30; 
      sliderRef.current.style.transform = `translateX(-${currentSlide * cardWidth * cardsPerView}px)`;
    }
  }, [currentSlide, cardsPerView]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="discover-section">
      <div className="discover-container">
        {/* Heading */}
        <div className="discover-header">
          <h2 className="discover-title">
            Discover<br />
            <span className="highlighted-text">What Sets Us Apart</span>
          </h2>
          <p className="discover-subtitle">
            We Deliver A Fitness Experience That's Truly One-Of-A-Kind. Explore How<br />
            We Help You Achieve Your Goals Faster And Smarter.
          </p>
        </div>

        {/* Cards Slider */}
        <div className="slider-container">
          <div className="slider-viewport">
            <div className="slider-track" ref={sliderRef}>
              {cards.map((card) => (
                <div key={card.id} className="discover-card">
                  <div className="card-content">
                    <div className="icon-title-row">
                      <div className="card-icon">{card.icon}</div>
                      <h3 className="card-title">{card.title}</h3>
                    </div>
                    <p className="card-description">{card.description}</p>
                    <button className="card-button">{card.buttonText}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Slider Navigation Dots */}
        <div className="slider-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
