import "./menuItem.css";
 
function MenuItem(props) {
  console.log(props.imageSrc);
  return (
    <>
      <div className="food-item-holder">
        <div className="food">
          <div className="food-item-title">
            {props.title}
          </div>
          <div className="food-price">{props.price}</div>
        </div>
        <div className="food-item-description">
          {props.content}
        </div>
        {props.imageSrc && (
          <div className="food-item-img">
            <img src={props.imageSrc} alt={props.title} />
          </div>
        )}
      </div>
    </>
  );
}


export default MenuItem;
