import './coffee.css'
import drinkItem from '../../../../components/drinkItem/drinkItem';

function Coffee(){
    const items = [
        { id: 1, title: "Item 1", description: "Description for Item 1" },
        { id: 2, title: "Item 2", description: "Description for Item 2" },
        { id: 3, title: "Item 3", description: "Description for Item 3" },
        { id: 4, title: "Item 4", description: "Description for Item 4" },
        { id: 5, title: "Item 5", description: "Description for Item 5" },
       ];
    return( 
        <div className="food-list">
        <div className="container"> 
          <h1>Menu</h1>
          <div className="drink-items">
            {items.map((item) => {
              return drinkItem(item.type);
            })}
          </div>
        </div>
        <div className="container">
          <h1>Menu</h1>
          <div className="drink-items">
            {items.map((item) => {
              return drinkItem(item.type);
            })}
          </div>
        </div>
        </div>
    )
}

export default Coffee;