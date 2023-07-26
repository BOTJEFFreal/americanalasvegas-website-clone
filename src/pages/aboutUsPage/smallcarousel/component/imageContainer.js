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
      className='small-imageContainer'
      style={{ backgroundImage: `url(${props.imageUrl})` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >  
    </div>
  );
}

export default ImageContainer;
