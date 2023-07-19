import { useState } from "react";
import Header from "../../components/header/header";
import Food from "./components/food/food";
import Dessert from "./components/dessert/dessert";
import Dinner from "./components/dinner/dinner"
import SundayBrunch from "./components/sundayBrunch/sundayBrunch";
import "./menu.css";
function MenuPage() {
  const [cardType, setCardType] = useState(0)
  const [rightAnimate, setrightAnimate] = useState(0)
  const [rightAnimate2, setrightAnimate2] = useState(0)
  return (
    <div>
      <Header></Header>
        <div className="main-content bg">
      <div className="food-menu">
        <h1>OUR MENU</h1>
        <div className="food-menu-nav">
          <button className={cardType === 0 && `red-color-button`} onClick={()=>{setCardType(0)}}>Lunch</button>
          <button className={cardType === 1 && `red-color-button`} onClick={()=>{setCardType(1);setrightAnimate((prevState)=>prevState+1);}}>Dinner</button>
          <button className={cardType === 2 && `red-color-button`} onClick={()=>{setCardType(2)}}>DESSERT</button>
          <button className={cardType === 3 && `red-color-button`} onClick={()=>{setCardType(3);setrightAnimate2((prevState)=>prevState+1)}}>Sunday Brunch</button>
        </div>
      </div>
      {cardType === 0 && <Food/>}
      {cardType === 1 && <Dinner rightAnimate= {rightAnimate}/>}
      {cardType === 2 && <Dessert/>} 
      {cardType === 3 && <SundayBrunch rightAnimate ={rightAnimate2}/>}
        
    </div>
    </div>
    
  );
}

export default MenuPage;
