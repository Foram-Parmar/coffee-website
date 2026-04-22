import React, { useState } from "react";
import "./App.css";

import Espresso1 from "./img/Espresso1.jpg";
import Cappuccino2 from "./img/Cappuccino2.avif";
import Latte3 from "./img/Latte3.webp";
import ColdCoffee4 from "./img/ColdCoffee4.avif";
import Mocha5 from "./img/Mocha5.png";
import Americanocoffee from "./img/Americanocoffee.jpg";
import AhmedabadColdCoffee7 from "./img/AhmedabadColdCoffee7.jpg";
import ChocolateCoffee8 from "./img/ChocolateCoffee8.jpg";
import HazelnutLatte9 from "./img/HazelnutLatte9.jpg";
import CaramelCoffee10 from "./img/CaramelCoffee10.jpg";
import VanillaLatte11 from "./img/VanillaLatte11.jpg";
import FilterCoffee12 from "./img/FilterCoffee12.avif";
import IcedLatte13 from "./img/IcedLatte13.webp";
import DoubleEspresso14 from "./img/DoubleEspresso14.webp";
import CafeFrappe15 from "./img/CafeFrappe15.jpg";

const coffeeProducts = [
  { id: 1, name: "Espresso", price: "₹120", image: Espresso1, desc: "Strong coffee" },
  { id: 2, name: "Cappuccino", price: "₹150", image: Cappuccino2, desc: "Creamy foam" },
  { id: 3, name: "Latte", price: "₹160", image: Latte3, desc: "Smooth milk coffee" },
  { id: 4, name: "Cold Coffee", price: "₹180", image: ColdCoffee4, desc: "Refreshing" },
  { id: 5, name: "Mocha", price: "₹170", image: Mocha5, desc: "Chocolate coffee" },
  { id: 6, name: "Americano", price: "₹140", image: Americanocoffee, desc: "Black coffee" },
  { id: 7, name: "Ahmedabad Cold Coffee", price: "₹200", image: AhmedabadColdCoffee7, desc: "Thick coffee" },
  { id: 8, name: "Chocolate Coffee", price: "₹220", image: ChocolateCoffee8, desc: "Sweet coffee" },
  { id: 9, name: "Hazelnut Latte", price: "₹210", image: HazelnutLatte9, desc: "Nutty coffee" },
  { id: 10, name: "Caramel Coffee", price: "₹230", image: CaramelCoffee10, desc: "Caramel taste" },
  { id: 11, name: "Vanilla Latte", price: "₹200", image: VanillaLatte11, desc: "Vanilla flavor" },
  { id: 12, name: "Filter Coffee", price: "₹100", image: FilterCoffee12, desc: "Indian style" },
  { id: 13, name: "Iced Latte", price: "₹190", image: IcedLatte13, desc: "Cold milk coffee" },
  { id: 14, name: "Double Espresso", price: "₹150", image: DoubleEspresso14, desc: "Extra strong" },
  { id: 15, name: "Cafe Frappe", price: "₹240", image: CafeFrappe15, desc: "Thick frappe" }
];

function Products() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => {
    return sum + parseInt(item.price.replace("₹", ""));
  }, 0);

  return (
    <div className="product-page">
      <h2 className="title">☕ Ahmedabad Coffee Specials</h2>

      {/* CART BOX */}
     <div className="cart-box">
  <div className="cart-header">
    <h3>🛒 Cart ({cart.length})</h3>
    <h4>Total: ₹{total}</h4>
  </div>

  {cart.length === 0 ? (
    <p className="empty">No items added</p>
  ) : (
    cart.map((item, index) => (
      <div key={index} className="cart-item">
        <span>☕ {item.name}</span>
        <button onClick={() => removeItem(index)}>❌</button>
      </div>
    ))
  )}
</div>

      {/* PRODUCTS */}
      <div className="product-grid">
        {coffeeProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="desc">{item.desc}</p>
              <p className="price">{item.price}</p>

              <button onClick={() => addToCart(item)} className="btn-order">
                Add to Cart ☕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;