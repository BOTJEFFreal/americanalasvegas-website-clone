import { useState } from "react";
import Header from "../../components/header/header";
import Coffee from "./components/coffee";
import Wine from "./components/wine";
import Liqueurs from "./components/liqueurs";
import "./drinks.css";

function DrinksPage() {
  const [cardType, setCardType] = useState(0);
  return (
    <div className="drink-bg">
      <Header></Header>
      <div className="main-content">
        <div className="drink-menu">
          <h1 className="drink-heading">OUR DRINKS</h1>
          <div className="drink-menu-nav">
            <button
              className={cardType === 0 && `red-color-button`}
              onClick={() => {
                setCardType(0);
              }}
            >
              COFFEE & TEA
            </button>
            <button
              className={cardType === 1 && `red-color-button`}
              onClick={() => {
                setCardType(1);
              }}
            >
              WINE
            </button>
            <button
              className={cardType === 2 && `red-color-button`}
              onClick={() => {
                setCardType(2);
              }}
            >
              Liqueurs
            </button>
          </div>
        </div>
        {cardType === 0 && <Coffee />}
        {cardType === 1 && <Wine />}
        {cardType === 2 && <Liqueurs />}
      </div>
    </div>
  );
}

export default DrinksPage;
