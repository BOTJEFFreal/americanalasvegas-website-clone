import React, { useEffect, useState } from "react";
import "./popup.css";
 
const PopUp = (props) => {
  const [imageIndex, setImageIndex] = useState(props.clickedImageIndex);
  const totalImages = 13;

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePreviousImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="modal">
      <div className="modal-outer-container">
        <span className="close" onClick={() => props.closePopup()}></span>
        <div className="modal-inner-container">
          <img
            className="modal-content"
            src={`images/imagegrid/full${imageIndex + 1}.jpg`}
            alt={`Image ${imageIndex + 1}`}
          />
          <a className="modal-right-button" onClick={handleNextImage}>
            <span className="modal-span"></span>
          </a>
          <a className="modal-left-button" onClick={handlePreviousImage}>
            <span className="modal-span"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
