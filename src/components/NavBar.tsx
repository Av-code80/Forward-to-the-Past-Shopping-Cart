import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import { useCart } from "../context/CartContext";

const NavBar: React.FC = () => {
  const { total, cart } = useCart();
  const navigate = useNavigate()

  const handleCartClick = (event: React.MouseEvent) => {
    if (cart.length === 0) {
      event.preventDefault()
      alert("Your cart is empty. Add items to your cart before viewing it.");
    } else {
      navigate("/cart");
    }
  }

  return (
    <header>
      <nav className="navbar">
          <ul>
            <li>
              <Link to="/">LOGO</Link>
            </li>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link onClick={handleCartClick} to="/cart">Cart: {total}</Link>
            </li>
          </ul>
      </nav>
    </header>
      
  );
};

export default NavBar;
