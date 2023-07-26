import "./carouselCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const StarComponent = ({ rating }) => {
    const stars = Array.from({ length: rating });
  
    return ( 
      <div className="stars-row">
        {stars.map((_, index) => (
          <div className="stars" key={index}>&#9733;</div>
        ))}
      </div>
    );
  }; 

function CarouselCard(props) {
  return (
    <div className="carouselCard">
      <div className="review-by">
          Review by - Yelp
      </div>
      <div className="stars-container">{props.name}: <StarComponent rating={props.stars}/></div>
      <div className="remark">
        <div className="faQuoteLeft">
        <FontAwesomeIcon className="quotes" icon={faQuoteLeft} />

        </div>
        <p>
          {props.content}
        </p>
        <div className="faQuoteRight">
        <FontAwesomeIcon className="quotes" icon={faQuoteRight} />

        </div>
      </div>
    </div>
  );
}



export default CarouselCard;
