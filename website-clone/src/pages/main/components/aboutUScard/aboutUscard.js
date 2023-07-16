import "./aboutUscard.css"
import aboutUsImage from './aboutUs.png'

function AboutUsCardComponent(){
    return(
        <div className="about-us">
        <div className="about-us-left">
          <img src={aboutUsImage} alt="Italian Trulli"></img>
        </div>
        <div className="about-us-right">
          <div className="about-us-container">
            <div className="about-us-heading">
              <p>About Us</p>
              <img className="banner" src="./banner.png" alt="Banner"></img>
              <div className="about-us-content">
                Americana brings incredible blends of various cultures to the
                Desert Shores community in Las Vegas. The restaurant offers fine
                dining with a blended cultural theme of modern American cuisine.
              </div>
              <div className="about-us-button">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutUsCardComponent;