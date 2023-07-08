import HeaderSmall from "../../components/headerSmall/headerSmall";
import InputTag from "../../components/inputTag/inputTag";
import DropdownComponent from "../../components/dropdown/dropdown"
import DatePickerComponent from "../../components/calender/calender"
import "./party.css";
function PartyPages() {
  return (
    <>
      <HeaderSmall></HeaderSmall>
      <div className="Main-container">
        <div className="main-heading">
          <h1>Group Reservations and Private Parties</h1>
          <p>
            Whether it's a bday party, baby shower, office function or any other
            special event, please fill out the form below and we'll do our best
            to accommodate your desired date and any requests you may have to
            make your party/celebration memorable.
          </p>
        </div>
        <div className="form">
          <InputTag></InputTag>
          <InputTag></InputTag>
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

          <div className="dropbox">
                <DropdownComponent></DropdownComponent>
                <DatePickerComponent></DatePickerComponent>
                <DropdownComponent></DropdownComponent>
          </div>
          <DropdownComponent></DropdownComponent>
          <DropdownComponent></DropdownComponent>

          <div className="bottom">
            <div className="bottom-continer">
              <p>Resume:</p>
              <div className="money-input"><InputTag></InputTag></div>
            </div>
            <textarea placeholder="Description / Requests (optional)..."></textarea>

            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartyPages;
