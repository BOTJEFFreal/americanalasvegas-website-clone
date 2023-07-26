import React, { useState } from 'react';
import './imageContainer.css';
import { Link } from 'react-router-dom';

function ImageContainer(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='imageContainer'
      style={{ backgroundImage: `url(${props.imageUrl})` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className='imageContainer-heading'>{props.heading}</div>
      <button
        className={`imageContainer-button1 ${
          isHovered ? 'hovered' : ''
        }`}
      >
        <Link className='imageContainer-button-text1' to={props.link}>
          {props.buttonText}
        </Link>
      </button>
    </div>
  );
}

export default ImageContainer;
