
import { useState } from "react";
import Header from "../../components/header/header";
import Food from "./components/food/food";
import Dessert from "./components/dessert/dessert";
import Dinner from "./components/dinner/dinner"
import SundayBrunch from "./components/sundayBrunch/sundayBrunch";
import "./menu.css";
function MenuPage() {
  const [cardType, setCardType] = useState(0)
  return (
    <div>
      <Header></Header>
        <div className="main-content bg">
      <div className="food-menu">
        <h1>OUR MENU</h1>
        <div className="food-menu-nav">
          <button onClick={()=>{setCardType(0)}}>Lunch</button>
          <button onClick={()=>{setCardType(1)}}>Dinner</button>
          <button onClick={()=>{setCardType(2)}}>DESSERT</button>
          <button onClick={()=>{setCardType(3)}}>Sunday Brunch</button>
        </div>
      </div>
      {cardType === 0 && <Food></Food>}
      {cardType === 1 && <Dinner></Dinner>}
      {cardType === 2 && <Dessert></Dessert>}
      {cardType === 3 && <SundayBrunch></SundayBrunch>}
        
    </div>
    </div>
    
  );
}

export default MenuPage;
