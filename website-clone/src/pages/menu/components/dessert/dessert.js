import './dessert.css'
import menuItem from '../../../../components/menuItem/menuItem';

function Dessert(){
    const items = [
        { id: 1, title: "Raspberry Cheesecake", description: "Chocolate Spoon | Berry Sauce", price:"$11.00" },
        { id: 2, title: "Desert Honey Crème Brûlée", description: "Honeycomb Candy | Sugar Tuile", price: "$10.00"},
        { id: 3, title: "Chocolate Mousse Cake", description: "Candied Pecans | Carmel Sauce", price:"$12.00" },
        { id: 4, title: "Opera Cake", description: "Creme Anglaise | Chantilly Cream + Ala Mode $3", price:"$12.00" },
        { id: 5, title: "Chef’s Selection of Sorbets", description: "", price: "$10.00"},
       ];
    return(
        <div className="food-list">
        <div className="container">
          <h1>Menu</h1>
          <div className="food-items">
            {items.map((item) => {
              return menuItem(item.type);
            })}
          </div>
        </div>
        </div>
    )
}

export default Dessert;