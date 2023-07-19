import InputTag from "../../components/inputTag/inputTag";
import HeaderSmall from "../../components/headerSmall/headerSmall";
import HeaderTextContainer from "../../components/headerTextContainer/headerTextContainer";

import "./jobs.css";

function JobsPage() {
  return (
    <>
      <HeaderSmall></HeaderSmall>

      <div className="Main-container">
        <HeaderTextContainer heading="Careers" subheading ="
        We are hiring! Apply below to become a part of our awesome team and we'll get back to you
         ASAP!"
         subheading2="Alternatively if you have questions you can call us at"
         anchor="(702) 331-5565"/>
        <div className="form">
          <InputTag placeholder="Name..."/>
          <InputTag placeholder="Phone..."/>
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

          <InputTag></InputTag>
          <InputTag></InputTag>

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
              <button>Choose a File</button>
            </div>
            <div className="button-message"></div>
            <div className="bottom-continer">
              <p>Resume:</p>
              <button>Choose a File</button>
            </div>
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobsPage;
