import InputTag from "../../components/inputTag/inputTag";
import HeaderSmall from "../../components/headerSmall/headerSmall";
import HeaderTextContainer from "../../components/headerTextContainer/headerTextContainer";
import "@fortawesome/fontawesome-free/css/all.css"; // Font Awesome CSS

import "./jobs.css";
import { useRef, useState } from "react";

function JobsPage() {
  const inputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isImgVisible, setIsImgVisible] = useState(false);
  const [filename, setFilename] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const imgInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFilename(selectedFile.name);
    setIsVisible(true)
  };

  const handleClickin = () => {
    setIsVisible(false);
  };

  const handleButtonClick = () => {
    imgInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setSelectedImage(URL.createObjectURL(selectedImage));
    setIsImgVisible(true);
  };

  return (
    <>
      <HeaderSmall></HeaderSmall>
      <div className="Main-container">
        <HeaderTextContainer
          heading="Careers"
          subheading="
        We are hiring! Apply below to become a part of our awesome team and we'll get back to you
         ASAP!"
          subheading2="Alternatively if you have questions you can call us at"
          anchor="(702) 331-5565"
        />
        <div className="form">
          <InputTag placeholder="Name..." />
          <InputTag placeholder="Phone..." />
          <div className="checkbox-row">
            <input type="checkbox" className="checkbox-polices"></input>
            <label>
              I'd like to get texts about specials, events, and other exclusive
              offers and announcements not available to the general public.
              <a href="https://www.spothopperapp.com/spots/77510/privacy_policy?_gl=1*1xz9hyu*_ga*NTAxMzgzNTk1LjE2ODg1Nzg0Mjc.*_ga_X1WPXLW71C*MTY4ODgxODUyNS40LjEuMTY4ODgyMTE3NS4wLjAuMA..*_ga_VG24VK2VKT*MTY4ODgxODUxMC45LjEuMTY4ODgyMTE3NS4wLjAuMA..*_ga_31HXNESSJY*MTY4ODgyMTE3My4xMC4wLjE2ODg4MjExNzUuMC4wLjA.&amp;_ga=2.114276871.1292730737.1688680247-501383595.1688578427">
                Privacy Policy
              </a>
            </label>
          </div>

          <InputTag />
          <InputTag />

          <div className="multiple-checklist">
            <p>Applying For:</p>
            <div>
              <input id="Bartender" type="checkbox" value="Bartender"></input>
              <label for="Bartender">Bartender</label>
            </div>
            <div>
              <input
                id="Busser/Bus Person"
                type="checkbox"
                value="Busser/Bus Person"
              ></input>
              <label for="Busser/Bus Person">Busser/Bus Person</label>
            </div>
            <div>
              <input id="Dishwasher" type="checkbox" value="Dishwasher"></input>
              <label for="Dishwasher">Dishwasher</label>
            </div>
            <div>
              <input
                id="Kitchen Manager"
                type="checkbox"
                value="Kitchen Manager"
              ></input>
              <label for="Kitchen Manager">Kitchen Manager</label>
            </div>
            <div>
              <input id="Line Cook" type="checkbox" value="Line Cook"></input>
              <label for="Line Cook">Line Cook</label>
            </div>
            <div>
              <input id="Prep cook" type="checkbox" value="Prep cook"></input>
              <label for="Prep cook">Prep cook</label>
            </div>
            <div>
              <input id="Runner" type="checkbox" value="Runner"></input>
              <label for="Runner">Runner</label>
            </div>
            <div>
              <input id="Server" type="checkbox" value="Server"></input>
              <label for="Server">Server</label>
            </div>
            <div>
              <input id="Sous Chef" type="checkbox" value="Sous Chef"></input>
              <label for="Sous Chef">Sous Chef</label>
            </div>
          </div>
          <textarea
            className="textarea"
            placeholder="Cover Letter (optional)..."
          ></textarea>
          <div className="bottom">
            <div className="bottom-continer">
              <p>Resume:</p>
              <button onClick={handleClick}>Choose a File</button>
              <input
                ref={fileInputRef}
                style={{ display: "none" }}
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <div className={`message ${isVisible ? "" : "message-invisible"}`}>
              <i className="fa fa-file custom-icon"></i>
              <div className="file-name">{filename}</div>
              <button className="close-button" onClick={handleClickin}>
                <span>X</span>
              </button>
            </div>
            <div className="bottom-continer">
              <p>Image:</p>
              <button onClick={handleButtonClick}>Upload Photo</button>
              <input
                type="file"
                ref={imgInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className={`image-picker ${isImgVisible ? "" : "message-invisible"}`}>
              <p>Photo Preview:</p>
              <img src={selectedImage} alt="Selected" />


            </div>
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobsPage;
