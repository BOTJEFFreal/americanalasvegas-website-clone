import { useState } from "react";
import "./cards.css";
import bannerImage from "./bannerImage.png"

function CardsComponents(props) {
 

  return (
    <div className="cards">
      <div className={props.toggle === true ? "catering":"catering-rev"}>
        <div className="catering-us-left">
          <div className="catering-us-container">
            <div className="catering-us-heading">
              <p>{props.heading}</p>
              <img className="banner" src={bannerImage} alt="Banner"></img>
              <div className="catering-us-subheading">
                {props.subheading}
              </div>
              <div className="catering-us-content">
                {props.content}
              </div>
              <div className="catering-us-button">
                <button>{props.heading}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="catering-us-right">
          <img src={props.img} alt="Italian Trulli"></img>
        </div>
      </div>
    </div>
  );
}

export default CardsComponents;
