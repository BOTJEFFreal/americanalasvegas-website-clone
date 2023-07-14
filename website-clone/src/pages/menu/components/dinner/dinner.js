import './dinner.css'
import menuItem from "../../../../components/menuItem/menuItem";
function Dinner(){
    const appetizersItems = [
      { id: 1, title: "Market Oysters (6)*", description: "Apple Mignonette | Classic Cocktail Sauce", price:"$24.00" },
      { id: 2, title: "Charcuterie and Cheese Board", description: "3 Cheeses | 3 Meats | Fun Accompaniments", price: "$30.00"},
      { id: 3, title: "Beet Cured Yellowtail Sashimi *", description: 'Wasabi | Kumquats | Soy "Caviar"', price:"$20.00" },
      { id: 4, title: "Boston Bibb Salad", description: "Apples | Walnuts | Creamy Blue Cheese", price:"$12.00" },
      { id: 5, title: "Sun Dried Tomato “Caesar” Salad", description: "Anchovy | Garlic Crouton | Parmesan", price: "$12.00"},
      { id: 6, title: "Beef Tartare*", description: "Balsamic | Quail Egg | Kennebec Potato Chips", price:"$25.00" },
      { id: 7, title: "Charred Mediterranean Octopus", description: "Eggplant Caponata | Calabrian Chili Aioli | Basil", price: "$20.00"},
      { id: 8, title: "Niki’s Spicy Crispy Shrimp", description: "Frisee | Shishito Peppers | Old School Crack Sauce", price:"$24.00" },
      { id: 9, title: "Seared Diver Scallops*", description: "Bone Marrow Risotto | Butternut Squash| Truffles", price:"$12.00",price2:"$40.00" },
      { id: 10, title: "Seared Hudson Valley Foie Gras", description: "Apple Strudel | Fig | Almonds", price: "$24.00"},
      { id: 11, title: "Roasted Chestnut Soup", description: "Bacon Lardons | Creme Fraiche", price: "$12.00"},
      ];

      const mainCourseItems = [
        { id: 1, title: "Smoked King Salmon*", description: "Pixie Tangerines | Fregola | Lemon Grass Soubise", price:"$40.00" },
        { id: 2, title: "Grilled Pacific Swordfish*", description: "Pepperonata | Farro| Champagne and Caviar", price: "$46.00"},
        { id: 3, title: "In-House Pappardelle", description: 'Blue Crab | Pine Nuts | Rapini Pesto', price:"$38.00" },
        { id: 4, title: "Chicken Piccata", description: "Broccolini | Polenta Fries| Meyer Lemon", price:"$28.00" },
        { id: 5, title: "Grilled Filet Mignon*", description: "Root Vegetables | Parsnip Puree | Red Wine", price: "$54.00"},
        { id: 6, title: "Roasted Venison Tenderloin", description: "Chanterelle Duxelles | Swiss Chard | Juniper Jus", price:"$52.00" },
        { id: 7, title: "All Day Braised Osso Buco", description: "Risotto Alla Milanese | Orange Gremolata | Hot Honey", price: "$65.00"},
        { id: 8, title: "18oz. Bone In New York Strip Steak*", description: "Purple Potatoes | Chefs Mushrooms | Truffled Celery Root", price:"$55.00" },
        { id: 9, title: "Steak Diane*", description: "Performed Tableside",price:"$65.00" },
        { id: 10, title: "Australian Wagyu Tomahawk*", description: "Root Vegetables | Truffle Potato Puree | Red Wine Natural. Ask your Server For Sizes", price: ""},
        { id: 11, title: "Japanese A5 Wagyu from Kagoshima*", description: "3 ounce Minimum", price: "$30.00/per ounce"},
        ];

      const FixCourseItems=[
        { id: 5, title: "Chef’s Amuse-Bouche", description: "", price: ""},
        { id: 6, title: "Yellowtail Sashimi*", description: "Finger Lime | Cilantro | Blood Orange", price:"" },
        { id: 7, title: 'Beet "Tartare"', description: "Belgian Endive | Smoked Ricotta | Yuzu Vinaigrette", price: ""},
        { id: 8, title: "Seared Diver Scallops*", description: "Red Lentils | Petite Sorrel | Beet Puree", price:"" },
        { id: 9, title: "Steak Diane* & Lobster*", description: "Performed Tableside",price:"" },
        { id: 10, title: "Pumpkin Sticky Tofee Cake", description: "Pepitas | Bourbon Sauce | Vanilla Icecreams", price: ""},
        
      ];
    return(
        <div className="food-list">
      <div className="container">
        <h1>Appetizers</h1>
        <div className="food-items">
          {appetizersItems.map((item) => {
            return menuItem(item.title);
          })}
        </div>
      </div>
      <div className="container">
        <h1>Entrees</h1>
        <p>20% Gratuity will be added to parties 6 or more</p>
        <div className="food-items">
          {mainCourseItems.map((item) => {
            return menuItem(item.title);
          })}
        </div>
      </div>
      </div>
    )
}

export default Dinner;