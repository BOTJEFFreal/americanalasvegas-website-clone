import React, { useState, useEffect } from "react";
import "./carousel.css";

import ImageContainer from "./component/imageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      imageUrl: "images/carousel/slide-img1.jpg",
      heading: "AMERICANA'S AUTHENTIC DISHES",
      buttonText: "OUR MENU",
      link:"./menu"
    },
    {
      id: 2,
      imageUrl: "images/carousel/slide-img2.jpg",
      heading: "SERVED TO PERFECTION",
      buttonText: "CATERING",
      link:"./catering"
    },
    {
      id: 3,
      imageUrl: "images/carousel/slide-img3.jpg",
      heading: "AUTHENTIC TASTE IN EVERY DISH",
      buttonText: "OUR MENU",
      link:"./menu"
    },
    {
      id: 4,
      imageUrl: "images/carousel/slide-img4.jpg",
      heading: "HOST YOUR NEXT PARTY WITH US",
      buttonText: "PARTIES",
      link:"./"
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
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <ImageContainer
            imageUrl={slides[index].imageUrl}
            heading={slides[index].heading}
            buttonText={slides[index].buttonText}
            link={slides[index].link}
            
          />
        </div>
      ))}
      <div className="controllers">
        <div className="indicators">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
        <div className="controls">
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
