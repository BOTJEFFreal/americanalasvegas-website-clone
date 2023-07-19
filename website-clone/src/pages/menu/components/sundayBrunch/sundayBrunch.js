import './sundayBrunch.css'
import MenuItem from "../../../../components/menuItem/menuItem";
import { useState, useEffect } from 'react';
function SundayBrunch(props){
    const savoryItems=[
      { id: 1, title: "Market Oysters (6)", description: "Pomegranite Mignonette ~ Classic Cocktail Sauce" , price:"$23.00" },
      { id: 2, title: "Baby Kale Salad", description: "Shaved Apples ~ Goat Cheese ~ White Balsamic. Add Chicken +$7 ~ Add Shrimp+ $9 ~ Smoked Salmon +$9" , price:"$14.00" },
      { id: 3, title: "Pesto Spaghettini", description: "Mushrooms ~ Peas ~ Parmesan. Add Chicken +$7 ~ Add Shrimp +$9 Add King Crab +$16" , price:"$16.00" },
      { id: 4, title: "Toasted Bagel", description: "Smoked Salmon ~ Masago ~ Chives" , price:"$15.00" },
      { id: 5, title: "Grilled Chicken B.L.T.", description: "Hawaiian Bun ~ Applewood Smoked Bacon ~ Tomato. Sea Salt Fries or Truffled ($3)" , price:"$17.00" },
      { id: 6, title: "Charcuterie and Cheese Board", description: "2 Cheeses ~ 2 Meats ~ Fun Accompaniments" , price:"$19.00", price2:"$30.00" },
      { id: 7, title: "Italian Eggs Benedict", description: "Poached Egg ~ Prosciutto ~ Bruschetta. Add King Crab +$16" , price:"$16.00" },
      { id: 8, title: "Avocado Toast", description: "Sunnyside Egg ~ Breakfast Radishes. Add Shrimp +$9 or Add King Crab +$16" , price:"$14.00" },
      { id: 8, title: "Bacon and Eggs", description: "Two Eggs any Style ~ Potato Hash ~ Sausage" , price:"$15.00" },
      { id: 9, title: "Shrimp and Grits", description: "Creamy Polenta ~ Pickled Red Onion ~ Whisky Reduction" , price:"$24.00" },
      { id: 9, title: "Big Eye Tuna Tataki*", description: "Daikon Salad | Masago | Yuzu" , price:"$19.00" },
      { id: 9, title: "All Day Braised Short Rib", description: "Potato Puree ~ Root Vegetables ~ Barolo Reduction" , price:"$30.00" },
      { id: 9, title: "Steak and Eggs", description: "Flat Iron Steak ~ Farm Egg ~ Red Wine Natural" , price:"$39.00" },
      { id: 9, title: "Presidents Breakfast", description: "Bone-in Ribeye ~ 2 Scallops ~ Truffled Potato Puree" , price:"$85.00" },
    ];
    const sweetItems = [
        { id: 5, title: "Brioche French Toast", description: "Berry Jam ~ Canadian Maple Syrup" , price:"$15.00" },
        { id: 5, title: "Berry Pancakes", description: "Orange- Maple Syrup ~ Chantilly Cream" , price:"$14.00" },
        { id: 5, title: "Pastry Basket for Two", description: "Cinnamon Rolls ~ Churros ~ Assorted Muffins" , price:"$11.00" },
      ];

    return(
      <>
      <div className="sundayBruch-desc">
          Bottomless Mimosas, Bloody Mary’s, Grapefruit Palomas, or Red Wine Sangria $20
          </div>
          <div className="food-list">
            <div className='set-list-width'>
            <div className="container">
        <h1>Savory</h1>
        <div className="food-items">
          {savoryItems.map((item) => {
            return <MenuItem title = {item.title} price ={item.price} content= {item.description}/>;
          })}
        </div>
      </div>
      <div className={` container restrict-width ${props.rightAnimate === 1 ? "right-animtate":"is-visible"}`}>
        <h1>Sweets</h1>
        <p>20% Gratuity will be added to parties 6 or more</p>
        <div className="food-items">
          {sweetItems.map((item) => {
            return <MenuItem title = {item.title} price ={item.price} content= {item.description}/>;
          })}
        </div>
      </div>
            </div>
      
      </div>
          </>
       
    )
}

export default SundayBrunch;