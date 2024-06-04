import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useCart } from "../context/CartContext";

const NavBar: React.FC = () => {
  const { total } = useCart();

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
              <Link to="/cart">Cart: {total}</Link>
            </li>
          </ul>
      </nav>
    </header>
      
  );
};

export default NavBar;
