import "./headerSmall.css";
import { Link } from "react-router-dom";
function HeaderSmall() {

  const goBack = () => {
    window.history.back();
  };
  
  return (
    <div class="col-md-12">
      <div class="go-back">
        <a
          href="javascript:void(0)" onClick={goBack}
          class="go-back-link"
        >
          <span class="material-icons">keyboard_arrow_left</span>
          <p>Back</p>
        </a>
      </div>
      <div class="logo-holder">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/spothopper/77510_logo_cj5bp1"
          alt="Americana Restaurant logo"
          class="logo"
        /></Link>
      </div>
    </div>
  );
}

export default HeaderSmall;
