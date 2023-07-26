import "./main.css";
import { useState, useRef, useEffect } from "react";
import Header from "../../components/header/header";
import CardsComponents from "./components/cards/cards";

import Footer from "../../components/footer/footer";
import Imagegrid from "../../components/imagegrid/imagegrid";
import partiesImg from "./components/cards/parties.png";
import cateringImg from "./components/cards/catering.png";
import AboutUsCardComponent from "./components/aboutUScard/aboutUscard";
import MapComponent from "./components/map/map";
import Reservation from "./components/reservation/reservation";
import CarouselText from "../../components/carouselText/carouselText";
import Carousel from "../../components/carousel/carousel";
import "@fortawesome/fontawesome-free/css/all.css";
import video from "./video.mp4";
import PopupComponent from "./components/popUp/popUp";

const MainPage = () => {  
  const [showPopup, setShowPopup] = useState(false);
  const counterRef = useRef(0);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(()=>{
    if(counterRef.current ===0){
      counterRef.current += 1;
      setTimeout(()=>{
        setShowPopup(true);
      },5000);
   
    }
  },[])
  return (
    <div className="main-page ">
      {showPopup && <PopupComponent handleClosePopup={handleClosePopup} />}
      <Header/>
      <div className="main-content ">
        <div className="video-player bg-color">
          <video autoPlay loop muted>
            <source src={video}></source>
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="red-banner">
          
            <a href="#" className="location-pin">
              <i className="fa fa-map-marker"></i> 
            </a>
            <p className="red-banner-text">2620 Regatta Drive, Las Vegas, NV 89128</p>
          
        </div>
        <AboutUsCardComponent />
        <CardsComponents
          toggle={true}
          heading="Catering"
          subheading="Let us cater your next event"
          content=" We Cater your Needs. Elegant style of catering for your style
                and budget. Any kind of event from weddings to birthdays."
          img={cateringImg}
          link={"./catering"}
        />
        <CardsComponents
          toggle={false}
          heading="Parties"
          subheading="Book your next party with us!"
          content="No matter the occasion you can celebrate at our place! Book a private party."
          img={partiesImg}
          link={"./"}
        />
        <Carousel/>
        <Reservation />
        <Imagegrid />
        <CarouselText/>
        <MapComponent />
      </div>
   
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
