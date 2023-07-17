import { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./cards.css";
import bannerImage from "./bannerImage.png";

function CardsComponents(props) {
  const { ref: myRef, inView: isVisible } = useInView();
  const [isVisibleCheck, setIsVisibleCheck] = useState(0);

  return (
    <>
      <div className="cards">
        <div className={props.toggle === true ? "catering" : "catering-rev"}>
          <div className="catering-us-left">
            <div className="catering-us-container">
              <div className="catering-us-heading">
                <p className={`${isVisible ? "fade-in-animation" : ""}`}>{props.heading}</p>
                <img className="banner" src={bannerImage} alt="Banner"></img>
                <div className={`catering-us-subheading ${isVisible ? (props.toggle===true ? "bottom-up-animation2" : "right-animation2"):""}`}>{props.subheading}</div>
                <div className={`catering-us-content ${isVisible ? (props.toggle===true ? "bottom-up-animation2" : "right-animation2"):""}`}>{props.content}</div>
                <div className={`catering-us-button ${isVisible ? (props.toggle===true ? "bottom-up-animation3" : "right-animation3"):""}`}>  
                  <button>{props.heading}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="catering-us-right">
            <img className={`${isVisible ? (props.toggle===true ? "bottom-up-animation" : "left-animation"):""}`} src={props.img} alt="Italian Trulli"></img>
          </div>
        </div>
      </div>
      <div ref={myRef} className="check-animation"></div>
    </>
  );
}

export default CardsComponents;
