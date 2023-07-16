import './coffee.css'
import drinkItem from '../../../../components/drinkItem/drinkItem';
import MenuItem from '../../../../components/menuItem/menuItem';

function Coffee(){
    const coffeeitems = [
        { id: 1, title: "Coffee", price: "$3.50" },
        { id: 2, title: "Espresso", price: "$3.50" },
        { id: 3, title: "Cappuccino", price: "$4.50" },
        { id: 4, title: "Café Latte", price: "$4.50" },
       ];

    const teaItems = [
        { id: 5, title: "Organic Breakfast", price: "$3.50" },
        { id: 6, title: "Organic Earl Grey", price: "$3.50" },
        { id: 7, title: "Green Tea Tropical", price: "$3.50" },
        { id: 8, title: "Organic Spring Jasmine", price: "$3.50" },
        { id: 9, title: "Mint Melange", price: "$3.50" },
    ];

    return( 
        <div className="coffee-list">
        <div className="coffee-container"> 
          <h1>Lavazza Coffee</h1>
          <div className="coffee-items">
            {coffeeitems.map((item) => {
            return <MenuItem title = {item.title} price ={item.price} content= ""/>;
            })}
          </div>
        </div>
        <div className="coffee-container"> 
          <h1>Mighty Leaf Teas</h1>
          <div className="coffee-items">
            {teaItems.map((item) => {
            return <MenuItem title = {item.title} price ={item.price} content= ""/>;
            })}
          </div>
        </div>
        </div>
    )
}

export default Coffee;