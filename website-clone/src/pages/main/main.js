import "./main.css";
import Header from "../../components/header/header";
import CardsComponents from "./components/cards/cards";

import Footer from "../../components/footer/footer";
import Imagegrid from "../../components/imagegrid/imagegrid"
import partiesImg from "./components/cards/parties.png";
import cateringImg from "./components/cards/catering.png";
import AboutUsCardComponent from "./components/aboutUScard/aboutUscard";
// import borderImage from './border.svg';
// import borderImage2 from './Vector.svg';
import '@fortawesome/fontawesome-free/css/all.css';


function MainPage() {
  return (
    <div className="main-page">
      {/* <Header></Header> */}
      <div className="main-content">
     
      <div className="red-banner">
        <h1>
          <a href="#" className="location-pin">
            <i className="fa fa-map-marker"></i>
          </a>
          2620 Regatta Drive, Las Vegas, NV 89128 
        </h1>
      </div>
      <AboutUsCardComponent/>
      <CardsComponents toggle={true} heading="Catering" subheading="Let us cater your next event" content=" We Cater your Needs. Elegant style of catering for your style
                and budget. Any kind of event from weddings to birthdays." img={cateringImg}/>
      <CardsComponents toggle={false} heading="Parties" subheading="Book your next party with us!" content="No matter the occasion you can celebrate at our place! Book a private party." img={partiesImg}/>
      {/* <img className="imggg" src ={borderImage} alt="My Happy SVG"/> */}
      <div className="reservation-section">
        <div className="reservation-heading">
          <h1>Reservations</h1>
          <p>
            Call us at<span>(702)-331-5565</span> or book a table through Open
            Table reservations:
          </p>
        </div>
        <div className="reservation-content">
          <iframe
            src="https://www.opentable.com/widget/reservation/canvas?rid=269260&amp;type=standard&amp;theme=wide&amp;overlay=false&amp;domain=com&amp;lang=en&amp;r3uid=OktkmuQSW--rwg--&amp;newtab=false&amp;disablega=false&amp;color=1"
            width="840"
            height="350"
            frameborder="0"
            scrolling="no"
            name="opentable-make-reservation-widget"
            title="Online Reservations | OpenTable, Americana Las Vegas"
            id="iFrameResizer0"
            class=""
          ></iframe>
          <script
            src="//www.opentable.com/widget/reservation/loader?rid=269260&amp;domain=com&amp;type=standard&amp;theme=wide&amp;lang=en&amp;overlay=false&amp;iframe=true"
            type="text/javascript"
          ></script>
        </div>
      </div>
      <Imagegrid></Imagegrid>
      <div className="map">
      <div className="map-left">
        <div className="map-content">
          <div className="map-heading">
            newsletter
          </div>
          <div className="map-subheading">
          Stay tuned for updates
          </div>
          <div className="map-form">
            <div className="map-form-heading">
            Sign up for our newsletter & get exclusive offers and invites!
            </div>
            <div className="map-form-content">
              <input placeholder="Your Email..."></input>
              <button>Submit</button>
            </div>
          </div>

        </div>

      </div>
        <div className="map-right">
        <img src="./about-us.png" alt="Italian Trulli"></img>

        </div>
      </div>
      </div>
      {/* <video autoplay="autoplay" id="coverVideo" loop="loop" muted="muted" playsinline="playsinline" poster="https://static.spotapps.co/web/americanalasvegas--com/custom/video_poster.jpg" data-vscid="td6vs1676">
            <source src="https://static.spotapps.co/website_videos/Americana_Website_Intro_EditedVideo_01142022_Vimeo720p30.m4v" type="video/mp4"></source></video>*/}
      
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
