import menuItem from "../../components/menuItem/menuItem";
import Header from "../../components/header/header";
import "./menu.css";
function MenuPage() {
  const items = [
    { id: 1, title: "Item 1", description: "Description for Item 1" },
    { id: 2, title: "Item 2", description: "Description for Item 2" },
    { id: 3, title: "Item 3", description: "Description for Item 3" },
    { id: 4, title: "Item 4", description: "Description for Item 4" },
    { id: 5, title: "Item 5", description: "Description for Item 5" },
    { id: 1, title: "Item 1", description: "Description for Item 1" },
    { id: 2, title: "Item 2", description: "Description for Item 2" },
    { id: 3, title: "Item 3", description: "Description for Item 3" },
    { id: 4, title: "Item 4", description: "Description for Item 4" },
    { id: 5, title: "Item 5", description: "Description for Item 5" },
  ];

  return (
    
    <div>
      <Header></Header>
        <div className="main-content bg">
      <div className="food-menu">
        <h1>OUR MENU</h1>
        <div className="food-menu-nav">
          <button>Lunch</button>
          <button>Dinner</button>
          <button>DESSERT</button>
          <button>Sunday Brunch</button>
        </div>
      </div>
      <div className="food-list">
      <div className="container">
        <h1>Appetizers</h1>
        <div className="food-items">
          {items.map((item) => {
            return menuItem(item.type);
          })}
        </div>
      </div>
      <div className="container">
        <h1>Entrees</h1>
        <p>20% Gratuity will be added to parties 6 or more</p>
        <div className="food-items">
          {items.map((item) => {
            return menuItem(item.type);
          })}
        </div>
      </div>
      </div>
      
    </div>
    </div>
    
  );
}

export default MenuPage;
