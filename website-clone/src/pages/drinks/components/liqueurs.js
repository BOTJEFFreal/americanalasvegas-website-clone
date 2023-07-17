import './drinkslist.css'
import MenuItem from '../../../components/menuItem/menuItem';

function Liqueurs(){
    const items = [
        { id: 1, title: "Lemoncello", price: "$10.00" },
        { id: 2, title: "Baileys Irish Cream", price: "$10.00" },
        { id: 3, title: "Disaronno Amaretto", price: "$10.00" },
        { id: 4, title: "Frangelico", price: "$12.00" },
        { id: 5, title: "Fernet Branca", price: "$12.00" },
        { id: 6, title: "Sambucca Black", price: "$12.00" },
        { id: 7, title: "Grand Marnier", price: "$12.00" },
       ];
    return(
        <div className="coffee-list list-extra-margin">
        <div className="coffee-container container-extra-margin">
          <h1>Liqueurs</h1>
          <div className="coffee-items">
            {items.map((item) => {
            return <MenuItem title = {item.title} price ={item.price} content= ""/>;
          })}
          </div>
        </div>
        </div>
    )
}

export default Liqueurs;