import { useState } from 'react';
import Header from '../../components/header/header';
import Coffee from './components/coffee/coffee';
import Wine from './components/wine/wine';
import Liqueurs from './components/liqueurs/liqueurs';
import './drinks.css'
 
function DrinksPage(){
    const [cardType, setCardType] = useState(0)
  return (
    <div>
      <Header></Header>
        <div className="main-content bg">
      <div className="food-menu">
        <h1>OUR MENU</h1>
        <div className="food-menu-nav">
          <button onClick={()=>{setCardType(0)}}>COFFEE & TEA</button>
          <button onClick={()=>{setCardType(1)}}>WINE</button>
          <button onClick={()=>{setCardType(2)}}>Liqueurs</button>
        </div>
      </div>
      {cardType === 0 && <Coffee></Coffee>}
      {cardType === 1 && <Wine></Wine>}
      {cardType === 2 && <Liqueurs></Liqueurs>}
        
    </div>
    </div>
    
  );
}

export default DrinksPage;