import React, { useState, useEffect } from "react";
import "./carousel.css";

import ImageContainer from "./component/imageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      imageUrl: "https://static.spotapps.co/web/americanalasvegas--com/custom/about_us_slide1.jpg",
     
    },
    {
      id: 2,
      imageUrl: "https://static.spotapps.co/web/americanalasvegas--com/custom/about_us_slide2.jpg",
    
    },
    {
      id: 3,
      imageUrl: "https://static.spotapps.co/web/americanalasvegas--com/custom/about_us_slide3.jpg",
    
    },
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
      <div className="image-overlay-top"></div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`small-slide ${index === currentIndex ? "active" : ""}`}
        >
          <ImageContainer
            imageUrl={slides[index].imageUrl}
            
          />
        </div>
      ))}
      <div className="small-controllers">
        <div className="small-indicators">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
        <div className="small-controls">
          <button className="control-btn" onClick={handlePauseClick}>
            {isPaused ? (
          
                <FontAwesomeIcon className="play-pause-button" icon={faPlay} style={{ width: '40px', height: '40px' }}
                />
              
            ) : (
                <FontAwesomeIcon className="play-pause-button" icon={faPause} style={{ width: '40px', height: '40px' }}
                />
              
            )}
          </button>
        </div>
      </div>
      <div className="image-overlay-bottom"></div>

    </div>
  );
};

export default Carousel;
