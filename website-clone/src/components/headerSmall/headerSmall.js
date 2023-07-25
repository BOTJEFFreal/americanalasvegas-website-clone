import "./headerSmall.css";
function HeaderSmall() {
  return (
    <div class="col-md-12">
      <div class="go-back">
        <a
          href="http://americanalasvegas.com/las-vegas-americana-restaurant-events"
          class="go-back-link"
        >
          <span class="material-icons">keyboard_arrow_left</span>
          <p>Back</p>
        </a>
      </div>
      <div class="logo-holder">
        <img
          src="https://res.cloudinary.com/spothopper/77510_logo_cj5bp1"
          alt="Americana Restaurant logo"
          class="logo"
        />
      </div>
    </div>
  );
}

export default HeaderSmall;
