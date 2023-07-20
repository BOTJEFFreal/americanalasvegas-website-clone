import "./main.css";
import { useInView } from "react-intersection-observer";
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
// import borderImage from './border.svg';
// import borderImage2 from './Vector.svg';
import "@fortawesome/fontawesome-free/css/all.css";
import video from "./video.mp4";
// import Carousel from "../../components/carousel/carousel";

const MainPage = () => {  
  return (
    <div className="main-page ">
      <Header/>
      <div className="main-content ">
        <div className="video-player bg-color">
          <video autoplay loop muted>
            <source src={video}></source>
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="red-banner">
          <h1>
            <a href="#" className="location-pin">
              <i className="fa fa-map-marker"></i> 
            </a>
            2620 Regatta Drive, Las Vegas, NV 89128
          </h1>
        </div>
        <AboutUsCardComponent />
        <CardsComponents
          toggle={true}
          heading="Catering"
          subheading="Let us cater your next event"
          content=" We Cater your Needs. Elegant style of catering for your style
                and budget. Any kind of event from weddings to birthdays."
          img={cateringImg}
        />
        <CardsComponents
          toggle={false}
          heading="Parties"
          subheading="Book your next party with us!"
          content="No matter the occasion you can celebrate at our place! Book a private party."
          img={partiesImg}
        />
        {/* <img className="imggg" src ={borderImage} alt="My Happy SVG"/> */}
        <Carousel/>
        <Reservation />
        <Imagegrid />
        <CarouselText/>
        <MapComponent />
      </div>
      {/* <video autoplay="autoplay" id="coverVideo" loop="loop" muted="muted" playsinline="playsinline" poster="https://static.spotapps.co/web/americanalasvegas--com/custom/video_poster.jpg" data-vscid="td6vs1676">
            <source src="https://static.spotapps.co/website_videos/Americana_Website_Intro_EditedVideo_01142022_Vimeo720p30.m4v" type="video/mp4"></source></video>*/}

      <Footer></Footer>
    </div>
  );
}

export default MainPage;
