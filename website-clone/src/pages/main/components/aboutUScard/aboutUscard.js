import "./aboutUscard.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import aboutUsImage from "./aboutUs.png";
import bannerImage from "./bannerImage.png";

function AboutUsCardComponent() {
  const {ref:myRef, inView :isVisible} = useInView();
  const [isVisibleCheck, setIsVisibleCheck] = useState(0);

 

  return (
    <div className="parent">
    <div className="image-overlay-top"></div>

    <div className="about-us">
      <div className="about-us-left">
        <img className={`${isVisible ? "animate1" : ""}`} src={aboutUsImage} alt="Italian Trulli"></img>
      </div>
      <div className="about-us-right">
        <div className="about-us-container">
          <div className="about-us-heading">
            <p className={`${isVisible ? "animate2" : ""}`}>About Us</p>

            <img className="banner" src={bannerImage} alt="Banner"></img>
            <div className={`about-us-content ${isVisible ? "animate3" : ""}`}>
              Americana brings incredible blends of various cultures to the
              Desert Shores community in Las Vegas. The restaurant offers fine
              dining with a blended cultural theme of modern American cuisine.
            </div>
            <div className="about-us-button">
              <button className={`${isVisible ? "animate3" : ""}`}>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref={myRef} className="check-animation image-bottom"></div>

     </div>
    
  );
}

export default AboutUsCardComponent;
