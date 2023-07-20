import './reservation.css'

function ReservationPage(){
    return(
        <div className="reservation-section">
        <div className="reservation-heading">
          <h1>Reservations</h1>
          <p>
            Call us at<span>(702)-331-5565</span> or book a table through Open
            Table reservations:
          </p>
        </div>
        <div className="reservation-content">
          <iframe
            src="https://www.opentable.com/widget/reservation/canvas?rid=269260&amp;type=standard&amp;theme=wide&amp;overlay=false&amp;domain=com&amp;lang=en&amp;r3uid=OktkmuQSW--rwg--&amp;newtab=false&amp;disablega=false&amp;color=1"
            width="700"
            height="350"
            frameborder="0"
            name="opentable-make-reservation-widget"
            title="Online Reservations | OpenTable, Americana Las Vegas"
            id="iFrameResizer0"
            class=""
          ></iframe>
          <script
            src="//www.opentable.com/widget/reservation/loader?rid=269260&amp;domain=com&amp;type=standard&amp;theme=wide&amp;lang=en&amp;overlay=false&amp;iframe=true"
            type="text/javascript"
          ></script>
        </div>
      </div>
    )
}

export default ReservationPage;