import "./aboutUsPage.css";
import aboutUsImage from "./aboutUs.png";
import bannerImage from "./bannerImage.png";
import sideImage from "./sideImage.png";
import logo from "./logo.png";
import Carousel from "./smallcarousel/carousel";
import Header from '../../components/header/header'
import OpenStreetMap from "../../components/map/openStreetMap";
function AboutUsPage() {
  return (
    <>
    <Header/>

<div>
  <div className="about-us-contianer">
    <div className="about-us-left">
      <img className="about-us-logo" src={logo}></img>
    </div>
    <div className="about-us-right">
      <Carousel />
    </div>
  </div>
  <div className="about-us-contianer">
    <div className="about-us-middle-left">
    </div>
    <div className="about-us-middle-right">
      <div className="about-us-right-content">
      <h1 className="about-us-heading"> ABOUT US </h1>
      <p className="about-us-content">
        Americana brings incredible blends of various cultures to the Desert
        Shores community in Las Vegas. The restaurant offers fine dining
        with a blended cultural theme of modern American cuisine.
        Americana`s authentic dishes draw inspiration from early American
        cuisine with mixed European interpretations. Americana is located at
        2620 Regatta Drive Suite 118 and the hours of operation are
        Tuesday-Saturday 11:30 a.m-10 p.m., closed Mondays. Our
        Award-winning Sunday Brunch is from 11 a.m.- 2:30 p.m.Sunday Night
        Dinner is from 3 p.m.-9 p.m. For more information, call us directly
        at <a className="about-us-a" href="tel:+17023315565">702-331-5565</a> or visit
        <a href="https://www.americanalasvegas.com/" target="_blank">
          americanalasvegas.com
        </a>
        or like us on Facebook at
        <a className="about-us-a"
          href="https://www.facebook.com/AmericanaLasVegas"
          target="_blank"
        >
          facebook.com/AmericanaLasVegas
        </a>
        and follow us on Twitter
        <a className="about-us-a" href="https://twitter.com/americanalv" target="_blank">
          @AmericanaLV
        </a>
        and Instagram at
        <a className="about-us-a" href="https://www.instagram.com/americanalv/" target="_blank">
          AmericanaLV
        </a>
        .
      </p>
      </div>
     
    </div>
  </div>
  <div className="about-us-bottom-contianer">
    <div className="map-container">
    <OpenStreetMap/>

    </div>
  </div>
</div>

</>
    
  );
}

export default AboutUsPage;
