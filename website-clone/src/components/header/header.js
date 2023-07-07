import './header.css'
import MyClickableImage from '../imagetag'

function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        <div className="header-right">
          <a href="#contact">MENU</a>
          <a href="#about">DRINKS</a>
          <a href="#contact">CATERING</a>
          <a href="#about">EVENTS</a>
          <a href="#contact">RESERVE</a>
          <a href="#about">JOBS</a>
          <div class="vl"></div>

          <MyClickableImage
        imageUrl="path_to_your_image.png"
        linkUrl="https://example.com"
        altText="Image"
      />
      <MyClickableImage
        imageUrl="path_to_your_image.png"
        linkUrl="https://example.com"
        altText="Image"
      />


        </div>
      </div>
    </>
  );
}

export default Header;
