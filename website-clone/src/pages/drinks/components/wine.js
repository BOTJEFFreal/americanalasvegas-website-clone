import "./drinkslist.css";
import MenuItem from "../../../components/menuItem/menuItem";

function Wine() {
  const items = [
    { id: 1, title: "Dessert Wines & Ports", price: "$15.00" },
    { id: 2, title: "Graham’s Tawny Port, 10 Year", price: "$15.00" },
    { id: 3, title: "Taylor Fladgate, Tawny Port, 20 Year", price: "$30.00" },
    { id: 4, title: "Far Niente Dolce", price: "$15.00" },
  ];
  return (
    <div className="coffee-list list-extra-margin">
      <div className="coffee-container container-extra-margin">
        <h1>Dessert Wines & Ports</h1>
        <div className="coffee-items">
          {items.map((item) => {
            return (
              <MenuItem title={item.title} price={item.price} content="" />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Wine;
