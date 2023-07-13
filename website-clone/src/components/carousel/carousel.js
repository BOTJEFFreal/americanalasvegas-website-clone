import React, { useState, useEffect } from 'react';
import './carousel.css'

const Carousel = () => {
  const slides = [
    { id: 1, imageUrl: 'https://picsum.photos/id/237/600/1900' },
    { id: 2, imageUrl: 'https://picsum.photos/id/238/600/1900' },
    { id: 3, imageUrl: 'https://picsum.photos/id/239/600/1900' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePauseClick = () => {
    setIsPaused((prevState) => !prevState);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length, isPaused]);

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
      <div className='controllers'>
      <div className="indicators">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
      <div className="controls">
        <button className="control-btn" onClick={handlePauseClick}>
          {isPaused ? 'Play' : 'Pause'}
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Carousel;