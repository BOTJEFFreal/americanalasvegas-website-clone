import "./menuItem.css";
 
function menuItem(props) {
  return (
    <>
      <div class="food-item-holder">
        <div className="food">
        <div class="food-item-title">
          {props.title}
        </div>
        <div class="food-price">{props.price}</div>
        </div>
        <div class="food-item-description">
          {props.content}
        </div>
      </div>
    </>
  );
}

export default menuItem;
