import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.scss";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "../components/image/Image";
import { useNavigateOnEmptyPage } from "../common/hooks/useNavigateOnEmptyPage";

/**
 * NavBar component to navigate between different pages
 */

const NavBar: React.FC = () => {
  const { total, cart } = useCart();

  const delay: number = 1000;
  useNavigateOnEmptyPage(cart, delay);

  const handleCartClick = (event: React.MouseEvent) => {
    if (cart.length === 0) {
      event.preventDefault();
      toast.error(
        "Your cart is empty. Add movie to your cart before viewing it"
      );
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
            <Link to="/">MOVIES</Link>
          </li>
          <li>
            <Link onClick={handleCartClick} to="/cart">
              <span aria-label={`Cart total: ${total} euros`}>
                {total}€ <FaShoppingCart size={30} aria-hidden="true" />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
