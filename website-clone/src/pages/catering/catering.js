import InputTag from "../../components/inputTag/inputTag";
import HeaderSmall from "../../components/headerSmall/headerSmall";
import Dropdown from "../../components/dropdown/dropdown";
import DatePickerComponent from "../../components/calender/calender";
import "./catering.css";
import HeaderTextContainer from "../../components/headerTextContainer/headerTextContainer";
function CateringPage() {
  return (
    <>
      <HeaderSmall></HeaderSmall>

      <div className="main-container">
        <HeaderTextContainer></HeaderTextContainer>
        <div className="form">
          <InputTag placeholder="Name..."></InputTag>
          <InputTag placeholder="Phone..."></InputTag>
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
          <InputTag placeholder="Email..."></InputTag>
          <div className="time-container">
            <Dropdown></Dropdown>
            <DatePickerComponent></DatePickerComponent>
            <Dropdown></Dropdown>
          </div>

          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
          <div className="budget">
            <label>Budget per person:</label>
            <div className="budget-input-continer">
              <InputTag type="moneyType"></InputTag>
            </div>
          </div>
          <textarea
            className="textarea"
            placeholder="Cover Letter (optional)..."
          ></textarea>

          <button className="submit">Submit</button>
        </div>
      </div>
    </>
  );
}

export default CateringPage;
