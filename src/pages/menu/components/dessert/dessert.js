import './dessert.css'
import MenuItem from '../../../../components/menuItem/menuItem';

function Dessert(){
    const items = [
        { id: 1, title: "Raspberry Cheesecake", description: "Chocolate Spoon | Berry Sauce", price:"$11.00" },
        { id: 2, title: "Desert Honey Crème Brûlée", description: "Honeycomb Candy | Sugar Tuile", price: "$10.00"},
        { id: 3, title: "Chocolate Mousse Cake", description: "Candied Pecans | Carmel Sauce", price:"$12.00" },
        { id: 4, title: "Opera Cake", description: "Creme Anglaise | Chantilly Cream + Ala Mode $3", price:"$12.00" },
        { id: 5, title: "Chef’s Selection of Sorbets", description: "", price: "$10.00"},
       ];
    return(
        <div className="food-list extend-width">
        <div className="container extend-container">
          <h2>Menu</h2>
          <div className="food-items">
            {items.map((item) => {
            return <MenuItem title = {item.title} price ={item.price} content= {item.description}/>;
          })}
          </div>
        </div>
        </div>
    )
}

export default Dessert;