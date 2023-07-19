import "./header.css";
import "./burger.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYelp } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const { ref: myRef, inView: isVisible } = useInView();
  const [isVisibleCheck, setIsVisibleCheck] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      {/* <div className={`${isScrolled ? "header" : "header"}`}> */}
      <nav
      ref={myRef}
       className={`header ${isScrolled ? "scrolled" : ""}`}>
        <img
          className={`logo-image ${isScrolled ? "scrolled" : ""}`}
          src="https://web.archive.org/web/20230328001623im_/https://static.spotapps.co/web/americanalasvegas--com/custom/logo.png"
        ></img>
        <div className={`header-right ${isVisible ? "fade-animation" : ""}`}>
          <div className="header-tags"></div>
          <a href="#contact">MENU</a>
          <a href="#about">DRINKS</a>
          <a href="#contact">CATERING</a>
          <a href="#about">EVENTS</a>
          <a href="#contact">RESERVE</a>
          <a className="jobs-link" href="#about">
            JOBS
          </a>
          <div class="vl"></div>

          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faYelp} />
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
      </nav>
      <div className={menu_class}>
        <button className="nav-container defalut-select">Menu</button>
        <button className="nav-container">Drinks</button>
        <button className="nav-container">Catering</button>
        <button className="nav-container">Events</button>
        <button className="nav-container">Parties</button>
        <button className="nav-container">Reserve</button>
        <button className="nav-container">Jobs</button>
      </div>
      <footer className="bottom-nav">
        <div className="bottom-nav-button">Reserve</div>
        <div className="bottom-nav-button">Jobs</div>
        <div className="bottom-nav-button">Parties</div>
        <div className="bottom-nav-button">Catering</div>
      </footer>
    </>
  );
}

export default Header;
