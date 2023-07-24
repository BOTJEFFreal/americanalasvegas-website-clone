import { useState } from "react";
import "./imagegrid.css";
import PopUp from "./popup/popup";

function Imagegrid() {
  const [clickedImageIndex, setClickedImageIndex] = useState(0);
  const [popUp, setPopUp] = useState(false);
  // adds class to darken background color

  const handleImageClick = (index) => {
    setPopUp(true);
    setClickedImageIndex(index);
  };


  const closePopup = () => {
    setPopUp(false);
  };

  const divTags = Array.from({ length: 14 }, (_, index) => (
    <div
      className={`div${index + 1} `}
      key={index + 1}
      onClick={() => handleImageClick(index)}
    >
      <img
        className={"imageGrid-image"}
        src={`images/imagegrid/full${index + 1}.jpg`}
        alt={`Slide ${index + 1}`}
      />
    </div>
  ));

  return (
    <>
      <div className={"grid"}>
        <div className="image-overlay-top"></div>
        {divTags}
        {popUp && (
          <PopUp
            open={popUp}
            closePopup={closePopup}
            clickedImageIndex={clickedImageIndex}
          />
        )}
        <div className="image-overlay-bottom"></div>
      </div>
    </>
  );
}

export default Imagegrid;
