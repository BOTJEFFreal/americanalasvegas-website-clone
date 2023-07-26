import "./header.css";
import "./burger.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYelp } from "@fortawesome/free-brands-svg-icons";

function Header(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const { ref: myRef, inView: isVisible } = useInView();

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
      <nav
      ref={myRef}
       className={`header ${isScrolled ? "scrolled" : ""}`}>
        <Link to="/"> <img
          className={`logo-image ${isScrolled ? "scrolled" : ""}`}
          src="https://web.archive.org/web/20230328001623im_/https://static.spotapps.co/web/americanalasvegas--com/custom/logo.png"
        ></img></Link>

       
        <div className={`header-right ${isVisible ? "fade-animation" : ""}`}>
          <div className="header-tags"></div>
          <Link className={`header-text ${props.checkPage === 1 && "active-header-text"}`} to="/menu">MENU</Link>
          <Link className={`header-text ${props.checkPage === 2 && "active-header-text"}`} to='/drinks'>DRINKS</Link>
          <Link className={`header-text ${props.checkPage === 3 && "active-header-text"}`} to="/catering" target="_blank" rel="noopener noreferrer" >CATERING</Link>
          <Link className={`header-text ${props.checkPage === 4 && "active-header-text"}`} to="/events">EVENTS</Link>
          <Link className={`header-text ${props.checkPage === 10 && "active-header-text"}`} to="/reserve" target="_blank" rel="noopener noreferrer" >Parties</Link>
          <a className={`header-text`} href="https://www.opentable.com/restref/client/?restref=269260&rid=269260&datetime=2021-12-08T16%3A00&covers=2&searchdatetime=2021-12-08T16%3A00&partysize=2&corrid=724af15e-2132-408a-95be-094ae7c99d5e">RESERVE</a>
          <Link className={`header-text ${props.checkPage === 6 && "active-header-text"}`} to="/jobs">JOBS</Link>
          <div class="vl"></div>

         <a className="header-icons" href="https://www.instagram.com/americanalv/"> <FontAwesomeIcon  className="icon" icon={faInstagram} /></a>
          <a className="header-icons" href="https://www.yelp.com/biz/americana-las-vegas-2"><FontAwesomeIcon className="icon" icon={faYelp} /></a>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
      </nav>
      <div className={menu_class}>
        <Link to="/menu" ><button className={`nav-container defalut-select ${props.checkPage === 1 && "active-burger-menu"}`}>Menu</button></Link>
        <Link to="/drinks" ><button className={`nav-container ${props.checkPage === 2 && "active-burger-menu"}`}>Drinks</button></Link>
        <Link to="/catering" ><button className={`nav-container ${props.checkPage === 3 && "active-burger-menu"}`}>Catering</button></Link>
        <Link to="/events" ><button className="nav-container">Events</button></Link>
        <Link to="/" ><button className={`nav-container ${props.checkPage === 4 && "active-burger-menu"}`}>Parties</button></Link>
        <Link to="/reserve"><button className={`nav-container ${props.checkPage === 5 && "active-burger-menu"}`}>Reserve</button></Link>
        <Link to="/jobs" ><button className={`nav-container ${props.checkPage === 6 && "active-burger-menu"}`}>Jobs</button></Link>
      </div>
      <footer className="bottom-nav">
        <a href="https://www.opentable.com/restref/client/?restref=269260&rid=269260&datetime=2021-12-08T16%3A00&covers=2&searchdatetime=2021-12-08T16%3A00&partysize=2&corrid=724af15e-2132-408a-95be-094ae7c99d5e"><div className="bottom-nav-button">Reserve</div></a>
        <Link to="/jobs" ><div className="bottom-nav-button">Jobs</div></Link>
        <Link to="/reserve" ><div className="bottom-nav-button">Parties</div></Link>
        <Link to="/catering" ><div className="bottom-nav-button">Catering</div></Link>
      </footer>
    </>
  );
}

export default Header;
