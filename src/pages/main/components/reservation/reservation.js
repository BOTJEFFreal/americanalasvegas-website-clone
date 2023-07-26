import "./reservation.css";
import React, { useState, useEffect } from 'react';


function ReservationPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="reservation-section">
      <div className="reservation-heading">
        <h1>Reservations</h1>
        <p>
          Call us at<span>(702)-331-5565</span> or book a table through Open
          Table reservations:
        </p>
      </div>
      <div className="reservation-content">
      {isMobile ? (
        <div className="mobile-content">
            <iframe
          src="https://www.opentable.com/widget/reservation/canvas?rid=269260&amp;type=standard&amp;theme=standard&amp;overlay=false&amp;domain=com&amp;lang=en&amp;r3uid=xmixMwdjc&amp;newtab=false&amp;disablega=false&amp;color=1"
          width="224"
          height="301"
          frameborder="0"
          scrolling="no"
          name="opentable-make-reservation-widget"
          title="Online Reservations | OpenTable, Americana Las Vegas"
          id="iFrameResizer1"
        ></iframe>
         
        </div>
      ) : (
        <div className="desktop-content">
            <iframe
          src="https://www.opentable.com/widget/reservation/canvas?rid=269260&amp;type=standard&amp;theme=wide&amp;overlay=false&amp;domain=com&amp;lang=en&amp;r3uid=hUqgWqOjN&amp;newtab=false&amp;disablega=false&amp;color=1"
          width="840"
          height="350"
          frameborder="0"
          scrolling="no"
          name="opentable-make-reservation-widget"
          title="Online Reservations | OpenTable, Americana Las Vegas"
          id="iFrameResizer0"
        ></iframe>
        
        </div>
      )}
       
      </div>
      <div className="image-bottom"></div>
    </div>
  );
}

export default ReservationPage;
