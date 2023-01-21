import React from "react";
import { BsBasket3Fill } from "react-icons/bs";


function Navbar() {
    return (
        <header>
        <div className="overlay"></div>
          <nav>
            <h2>Shop</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li className="cart">
                <a href="#"><BsBasket3Fill className="basket-icon" size={20}/>Cart<span>0</span></a>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default Navbar;