import React from "react";
// styling
import "./popup.css";
// images

const PopUp = (props) => {
  // function that takes boolean as param to conditionally display popup
  const { setPopUp, image } = props;

  return (
    <div className="popup">
         <div
      class="fancybox-wrap fancybox-desktop fancybox-type-image fancybox-opened snipcss-U5ZN3 style-WJY2W"
      tabindex="-1"
      id="style-WJY2W"
    >
      <div class="fancybox-skin style-1v1kg" id="style-1v1kg">
        <div class="fancybox-outer">
          <div class="fancybox-inner style-6Is5y" id="style-6Is5y">
            <img
              class="fancybox-image"
              src="https://static.spotapps.co/spots/ed/5902eb86de4da3bb42e5bcfb539122/full"
              alt="Old Fashion Smoked cocktail"
            />
          </div>
          <a
            title="Previous"
            class="fancybox-nav fancybox-prev"
            href="javascript:;"
          >
            <span></span>
          </a>
          <a
            title="Next"
            class="fancybox-nav fancybox-next"
            href="javascript:;"
          >
            <span></span>
          </a>
        </div>
        <a
          title="Close"
          class="fancybox-item fancybox-close"
          href="javascript:;"
        ></a>
      </div>
    </div>
    </div>
   
  );
};

export default PopUp;
