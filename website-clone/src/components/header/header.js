import "./header.css";
import { useEffect, useState } from "react";
import MyClickableImage from "../imagetag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYelp } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <div className={`${isScrolled ? "header" : "header"}`}> */}
      <nav className={`header ${isScrolled ? "scrolled" : ""}`}>

        <img className={`logo-image ${isScrolled ? "scrolled" : ""}`} src="https://web.archive.org/web/20230328001623im_/https://static.spotapps.co/web/americanalasvegas--com/custom/logo.png"></img>
        <div className="header-right">
          <a href="#contact">MENU</a>
          <a href="#about">DRINKS</a>
          <a href="#contact">CATERING</a>
          <a href="#about">EVENTS</a>
          <a href="#contact">RESERVE</a>
          <a className="jobs-link" href="#about">JOBS</a>
          <div class="vl"></div>

          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faYelp} />
         
        </div>
      </nav>
    </>
  );
}

export default Header;
