import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Importation de l'icône
import "./NavBar.scss";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "../image/Image";

const NavBar: React.FC = () => {
  const { total, cart } = useCart();
  const navigate = useNavigate();

  const handleCartClick = (event: React.MouseEvent) => {
    if (cart.length === 0) {
      event.preventDefault();
      toast.error(
        "Your cart is empty. Add items to your cart before viewing it"
      );
    } else {
      navigate("/cart");
    }
  };

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <Image
                src="/assets/images/logo.png"
                alt="Back to the Future logo"
                className="navbar-logo"
              />
            </Link>
          </li>
          <li className="li-hover">
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link onClick={handleCartClick} to="/cart">
              <span>
                {total}€ <FaShoppingCart size={30} />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
