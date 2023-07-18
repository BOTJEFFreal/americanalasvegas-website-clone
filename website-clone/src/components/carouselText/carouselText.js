import React, { useState, useEffect } from "react";
import CarouselCard from "../carouselCard/carouselCard";
import "./carouselText.css";

const CarouselText = () => {
  const cards = [
    {
      id: 1,
      name: "Nikole T",
      stars: 5,
      content:
        "Absolutely delicious food! Great service! Great atmosphere. Sat inside with a beautiful water view! I recommend going first thing when they open. It wasn't too crowded despite the lunchtime busyness. A great way to celebrate my birthday early! I WILL BE COMING BACK!",
    },
    {
      id: 2,
      name: "Jane C",
      stars: 5,
      content:
        "If you're looking for a fine dining with superb customer service... this place is the gem! Been here last night, and everything is absolutely amazing. Our server is the utmost attentive and accommodating waiter I have encountered for the longest time...",
    },
    {
      id: 3,
      name: "Karina K",
      stars: 5,
      content:
        "Wow this is a restaurant I plan on going to a thousand times over. Located in the beautiful desire shores, this was a fabulous dining experience. The seating was better than I expected, and out of all the restaurants in desert shores, this indoor dining seating gives you the best view of the lake.",
    },
    {
      id: 4,
      name: "Karen S",
      stars: 5,
      content:
        "Went for their Sunday brunch and my party and I could not have been happier . They offer bottomless mimosas , bloody Mary's , and palomas ( tequila and grapefruit juice ) , which was nice because they allowed us to switch drinks up when ordering more  rounds...",
    },
    {
      id: 5,
      name: "Yogi C",
      stars: 5,
      content:
        "Wonderful and beautiful to have Sunday brunch here! It is by the lake and the ambient is just so relaxing! Food was excellent! The salad was so fresh and crispy. The dressing was just mixed to perfect. And the main dish of pasta and salmon was so tender and juicy. ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePauseClick = () => {
    setIsPaused(true);
    console.log(isPaused);
  };
  const handlePlayClick = () => {
    setIsPaused(false);
    console.log(isPaused);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        console.log(isPaused);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [cards.length, isPaused]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="title">Review</div>
      <div className="carousel-cards">
        {cards.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <CarouselCard
              name={cards[index].name}
              stars={cards[index].stars}
              content={cards[index].content}
            />
          </div>
        ))}
      </div>
      <div className="controllers">
        <div className="indicators">
          {cards.map((slide, index) => (
            <span
              key={slide.id}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
        <div className="controls">
          <button className="control-btn" onClick={handlePlayClick}>
            Play
          </button>

          <button className="control-btn" onClick={handlePauseClick}>
            Pause
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default CarouselText;
