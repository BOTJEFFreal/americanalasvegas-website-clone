import './coffee.css'
import drinkItem from '../../../../components/drinkItem/drinkItem';

function Coffee(){
    const items = [
        { id: 1, title: "Coffee", description: "$3.50" },
        { id: 2, title: "Espresso", description: "$3.50" },
        { id: 3, title: "Cappuccino", description: "$4.50" },
        { id: 4, title: "Café Latte", description: "$4.50" },

        { id: 5, title: "Organic Breakfast", description: "$3.50" },
        { id: 6, title: "Organic Earl Grey", description: "$3.50" },
        { id: 7, title: "Green Tea Tropical", description: "$3.50" },
        { id: 8, title: "Organic Spring Jasmine", description: "$3.50" },
        { id: 9, title: "Mint Melange", description: "$3.50" },
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