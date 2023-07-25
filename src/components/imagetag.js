import React from 'react';

const ClickableImage = ({ imageUrl, linkUrl, altText }) => {
  return (
    <a href={linkUrl}>
      <img src={imageUrl} alt={altText} />
    </a>
  );
};

export default ClickableImage;