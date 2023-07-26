import { useState,useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./cards.css";
import bannerImage from "./bannerImage.png";
import { Link } from "react-router-dom";

function CardsComponents(props) {
  const { ref: myRef, inView: isVisible } = useInView();
  const [isVisibleCheck, setIsVisibleCheck] = useState(0);

  useEffect(() => {
    setIsVisibleCheck(true);
  }, [isVisible]);

  return (
    <>
      <div className="cards">
        <div className={props.toggle === true ? "catering" : "catering-rev"}>
          <div className="catering-us-left">
            <div className="catering-us-container">
              <div className="catering-us-heading">
                <p className={`${isVisibleCheck? "fade-in-animation" : ""}`}>{props.heading}</p>
                <img className="banner" src={bannerImage} alt="Banner"></img>
                <div className={`catering-us-subheading ${isVisibleCheck ? (props.toggle===true ? "bottom-up-animation2" : "right-animation2"):""}`}>{props.subheading}</div>
                <div className={`catering-us-content ${isVisibleCheck ? (props.toggle===true ? "bottom-up-animation2" : "right-animation2"):""}`}>{props.content}</div>
                <div className={`catering-us-button ${isVisibleCheck ? (props.toggle===true ? "bottom-up-animation3" : "right-animation3"):""}`}>  
                  <button><Link className="card-button-text" to={props.link}>{props.heading}</Link></button>
                </div>
              </div>
            </div>
          </div>
          <div className="catering-us-right">
            <img className={`${isVisibleCheck ? (props.toggle===true ? "bottom-up-animation" : "left-animation"):""}`} src={props.img} alt="Italian Trulli"></img>
          </div>
        </div>
      </div>
      <div ref={myRef} className="check-animation"></div>
    </>
  );
}

export default CardsComponents;
