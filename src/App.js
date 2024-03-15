import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  const [cart, setCart] = useState({})
  const [total, setTotal] = useState(0)

  function addToCart(itemName, price) {

    setCart((prevCart) => {
      const newCart = { ...prevCart };      
  
      if(itemName in newCart){
        newCart[itemName] += 1;
      }
      else{
        newCart[itemName] = 1;
      }  
      return newCart;
    });

    setTotal(prevTotal => {
      const newTotal = prevTotal + price;
      return newTotal;
    });

  }

  
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="bakery-items">
        {bakeryData.map((item, index) => (
          <BakeryItem
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            addToCart={addToCart} 

          />
        ))}
      </div>

      
      <h2>Cart</h2> { "This is your cart:" }
      <ul>
          {Object.keys(cart).map((itemName, count) => (
            <li key={count}>
              {cart[itemName]}x {itemName}
            </li>
          ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>

      

    </div>
  );
}


export default App;