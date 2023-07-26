import './map.css'
import OpenStreetMap from '../../../../components/map/openStreetMap';

function MapComponent(){
    return(
        <div className="map">
        <div className="image-overlay-top"></div>

      <div className="map-left">
        <div className="map-content">
          <div className="map-heading">
            newsletter
          </div>
          <div className="map-subheading">
          Stay tuned for updates
          </div>
          <div className="map-form">
            <div className="map-form-heading">
            Sign up for our newsletter & get exclusive offers and invites!
            </div>
            <div className="map-form-content">
              <input placeholder="Your Email..."></input>
              <button>Submit</button>
            </div>
          </div>

        </div>

      </div>
        <div className="map-right">
        <OpenStreetMap/>
        </div>
        <div className="image-overlay-bottom"></div>

      </div>
    )
}

export default MapComponent;