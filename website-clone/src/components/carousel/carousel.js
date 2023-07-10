import React, { useState, useEffect } from 'react';
import './carousel.css'
const Carousel = () => {
  const slides = [
    { id: 1, imageUrl: './image1.png' },
    { id: 2, imageUrl: './image2.png' },
    { id: 3, imageUrl: './image3.png' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
        </div>
      ))}
      <div className="indicators">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
