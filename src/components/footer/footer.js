import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYelp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="location">
          <div class="hours-title">
            <h1>Location</h1>
          </div>
          <p>2620 Regatta Drive</p>
          <p>Las Vegas, NV</p>
          <p>89128</p>
        </div>
        <div className="hours">
          <div class="hours-title">
            <h1>Hours</h1>
          </div>
          <p>Lunch 11:30AM-3:00PM Tuesday-Saturday</p>
          <p>Brunch 11:00 AM- 3:00PM Sunday</p>
          <p>Dinner Tuesday, Wednesday, Thursday, Sunday, 3:00PM-9:00PM</p>
          <p>Dinner Friday &amp; Saturday 3:00PM -9:30PM</p>
        </div>
        <div class="find-us">
          <section className="section-top">
            <div class="social">
              <div class="social-title">
                <h1>Find us on...</h1>
              </div>
              <div class="social-links social-icons-holder social-square">
                <a className="footer-a" href="https://www.instagram.com/americanalv/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="footer-a" href="https://www.yelp.com/biz/americana-las-vegas-2">
                  <FontAwesomeIcon icon={faYelp} />
                </a>
              </div>
            </div>
          </section>
          <section>
            <div class="contact-us">
              <div class="contact-us-title">
                <h1>Contact us</h1>
              </div>
              <p>
                <a className="phone-link" href="tel:+17023315565">
                  (702)-331-5565
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-boottom-header">Powered by: </p>
        <p className="footer-boottom-content">
          Website design, Social Media marketing and Email marketing provided by
          SpotHopper.
        </p>
      </div>
      <div className="footer-end">
        <p>We strive to make our website accessible to everybody. </p>
        <a href="#">Learn More.</a>
      </div>
    </>
  );
}

export default Footer;
