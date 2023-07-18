import React, { useState, useEffect } from "react";
import ImageContainer from "./component/imageContainer";
import "./carousel.css";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/id/237/600/1900",
      heading: "HOST YOUR NEXT PARTY WITH US",
      buttonText: "Our Menu",
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/id/238/600/1900",
      heading: "HOST YOUR NEXT PARTY WITH US",
      buttonText: "Our Menu",
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/id/239/600/1900",
      heading: "HOST YOUR NEXT PARTY WITH US",
      buttonText: "Our Menu",
    },
    {
      id: 4,
      imageUrl: "https://picsum.photos/id/237/600/1900",
      heading: "HOST YOUR NEXT PARTY WITH US",
      buttonText: "Our Menu",
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

  const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );

  return (
    <div className="carousel-img">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
          <ImageContainer
            imageUrl={slides[index].imageUrl}
            heading={slides[index].heading}
            buttonText={slides[index].buttonText}
          />
        </div>
      ))}
      <div className="controllers-img">
        <div className="indicators-img">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              className={`indicator-img ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
        <div className="controls-img">
          <button className="control-btn-img" onClick={handlePauseClick}>
            {isPaused ? <PlayIcon /> : <PauseIcon />}
            {/* rgba(255, 255, 255, 0.8) */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
