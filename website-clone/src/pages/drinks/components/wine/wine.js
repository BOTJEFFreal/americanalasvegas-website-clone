import './wine.css'
import menuItem from '../../../../components/menuItem/menuItem';

function Wine(){
    const items = [
      { id: 1, title: "Dessert Wines & Ports", price: "$15.00" },
      { id: 2, title: "Graham’s Tawny Port, 10 Year", price: "$15.00" },
      { id: 3, title: "Taylor Fladgate, Tawny Port, 20 Year", price: "$30.00" },
      { id: 4, title: "Far Niente Dolce", price: "$15.00" },
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

export default Wine;