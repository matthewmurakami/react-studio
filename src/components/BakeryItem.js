import React from 'react';
import { addToCart } from '../App';
import '../App.css'; // assuming you have or will create a CSS file for styling

const BakeryItem = ({ name, description, price, image, addToCart}) => {
    return (
      <div className="BakeryItem">
        <img src={image} alt={name} className="bakery-item-image" />
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="bakery-item-price">${price}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(name, price)}>Add to Cart</button>
      </div>
    );
  };
  
  export default BakeryItem;

