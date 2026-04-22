import React from "react";


import Espresso from "./img/Espresso.jpeg";
import Cappuccino from "./img/Cappuccino.jpeg";
import Latte from "./img/Latte.jpeg";
import ColdCoffee from "./img/ColdCoffee.jpeg";
import Mocha from "./img/Mocha.jpeg";

const menuItems = [
  { id: 1, name: "Espresso", price: "₹120", img: Espresso },
  { id: 2, name: "Cappuccino", price: "₹150", img:Cappuccino },
  { id: 3, name: "Latte", price: "₹160", img: Latte },
  { id: 4, name: "Cold Coffee", price: "₹180", img: ColdCoffee },
  { id: 5, name: "Mocha", price: "₹170", img: Mocha },
];  

const Menu = () => {
  return (
    <section className="menu-section">
      <h2>☕ Our Menu</h2>
      <div className="menu-container">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.img} alt={item.name} className="menu-img" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
