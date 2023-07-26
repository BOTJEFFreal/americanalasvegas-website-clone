import "./aboutUscard.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import aboutUsImage from "./aboutUs.png";
import bannerImage from "./bannerImage.png";
import { Link } from "react-router-dom";
function AboutUsCardComponent() {
  const { ref: myRef, inView: isVisible } = useInView();
  const [isVisibleCheck, setIsVisibleCheck] = useState(false);

  useEffect(() => {
    setIsVisibleCheck(true);
  }, [isVisible]);
  return (
    <div className="parent">
      <div className="about-us">
        <div className="about-us-left">
          <img
            className={`${isVisibleCheck ? "animate1" : ""}`}
            src={aboutUsImage}
            alt="Italian Trulli"
          ></img>
        </div>
        <div className="about-us-right">
          <div className="about-us-container">
            <div className="about-us-heading">
              <p className={`${isVisibleCheck ? "animate2" : ""}`}>About Us</p>

              <img className="banner" src={bannerImage} alt="Banner"></img>
              <div
                className={`about-us-card-content ${
                  isVisibleCheck ? "animate3" : ""
                }`}
              >
                Americana brings incredible blends of various cultures to the
                Desert Shores community in Las Vegas. The restaurant offers fine
                dining with a blended cultural theme of modern American cuisine.
              </div>
              <div className="about-us-button">
                <button className={`${isVisibleCheck ? "animate3" : ""}`}>
                          <Link  className="about-us-button-text" to="/aboutus">Read More  </Link>

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={myRef} className="check-animation"></div>
    </div>
  );
}

export default AboutUsCardComponent;
