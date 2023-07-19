import { useEffect, useState } from "react";
import "./imagegrid.css";
import PopUp from './popup/popup';


function Imagegrid() {
  const [clickedImageIndex, setClickedImageIndex] = useState(0);
  const [popUp, setPopUp] = useState(false)
    // adds class to darken background color
  const duringPopUp = popUp ? " during-popup" : ""

  const divTags = Array.from({ length: 14 }, (_, index) => (
    <div
      className={`div${index+1} `+ duringPopUp}
      key={index + 1}
      onClick={() => handleImageClick(index)}
    >
      <img className={"imageGrid-image" + duringPopUp}
        src={`images/imagegrid/full${index + 1}.jpg`}
        alt={`Slide ${index + 1}`}
      />
    </div>
  ));

  const handleImageClick = (index) => {
    setPopUp(true)
    setClickedImageIndex(index)
  };

  return (
    <>
     <div className={"grid" + duringPopUp}>
      {divTags}
      {popUp && <PopUp setPopUp={setPopUp} image={`images/imagegrid/full${clickedImageIndex + 1}.jpg`}/>}
    </div>
    </>
   
  );
}

export default Imagegrid;
