import './food.css'
import MenuItem from "../../../../components/menuItem/menuItem";
// import { MenuList } from 'react-select/dist/declarations/src/components/Menu';
function Food(){
    const items = [
        { id: 1, title: "Market Select Oysters*", description: "Cocktail Sauce | Cucumber-Lime Mignonette", price:"$24.00" },
        { id: 2, title: "Marinated Seafood Salad", description: "Shrimp| Octopus | Calamari", price:"$20.00" },
        { id: 3, title: "Lemon Thyme “Caesar” Salad", description: "Brioche Crouton | Parmesan Add Chicken $7 | Add Shrimp $9 Add Salmon*$12", price:"$12.00" },
        { id: 4, title: "Chopped Salad", description: "Egg | Avocado | Bacon | Ranch Add Chicken $7|Add Shrimp $9 | Add Salmon*$12", price:"$16.00" },
        { id: 5, title: "Sesame Crusted Tuna*", description: "Shiso | Masago | Soy", price:"$20.00" },
        { id: 6, title: "Salmon Tartare", description: "Avocado Crema ~ Ponzu ~ Rice Crisps", price:"$18.00" },
        { id: 7, title: "Niki’s Spicy Crispy Shrimp", description: "Cabbage Slaw | Dragon Fruit | Yuzu", price:"$20.00" },
        { id: 8, title: "Asparagus and Pea Soup", description: "Blue Crab | Creme Fraiche", price:"$24.00" },
        { id: 9, title: "Charcuterie and Cheese Board", description: "2 Cheeses | 2 Meats | Fun Accompaniments", price:"$21.00" },
        { id: 10, title: "Italian Wedge Salad", description: "Salami | Blue Cheese | Cherry Peppers | Creamy Oregano Vinaigrette", price:"$12.00" },       
      ];
    const entreesItems = [
      { id: 11, title: "Spicy Gluten-Free Fusilli Pasta", description: "Basil | Guanciale | San Marzano Tomatoes", price:"$15.00" },
        { id: 12, title: "Moms Garlicky Alfredo Fettucine", description: "Locatelli| Parmesan | Farm Egg. Add Chicken $7 | Add Shrimp $9| Add Salmon*$12", price:"$17.00" },
        { id: 13, title: "Americana Prime Burger*", description: "Caramelized Onions | Aged Cheddar | Jacqueline Sauce Sea Salt Fries or Truffled ($3)", price:"$18.00" },
        { id: 14, title: "Shrimp Po' Boy Sandwich", description: "Coleslaw | Remoulade. Sea Salt Fries or Truffled ($3) ADD Chicken $7", price:"$24.00" },
        { id: 15, title: "Pan Seared King Salmon*", description: "English Pea Risotto | Meyer Lemon", price:"$24.00" },
        { id: 16, title: "Chicago Style Shaved Beef Sandwich", description: "Provolone| Giardiniera | Au jus", price:"$22.00" },
        { id: 17, title: "Grilled Petite Ribeye Steak*", description: "Hen Of the Woods Mushroom | Red Wine Natural | Potato Puree", price:"$37.00" },
        { id: 18, title: "Japanese A5 Wagyu from Kagoshima*", description: "3-ounce Minimum", price:"$30.00/per ounce" },
        { id: 19, title: "Grilled Chicken Teriyaki Sandwich", description: "Avocado | Pineapple Aioli | Hawaiian Bun", price:"$14.00" },
    ];
    return(
        <div className="food-list">
      <div className="food-container">
        <h2>Appetizers</h2>
        <div className="food-items">
          {items.map((item) => {
            return <MenuItem title = {item.title} price ={item.price} content= {item.description}/>;
          })}
        </div>
      </div>
      <div className="food-container">
        <h2>Entrees</h2>
        <p>20% Gratuity will be added to parties 6 or more</p>
        <div className="food-items">
          {entreesItems.map((item) => {
            return <MenuItem title = {item.title} price ={item.price} content= {item.description}/>;
          })}
        </div>
      </div>
      </div>
    )
}

export default Food;