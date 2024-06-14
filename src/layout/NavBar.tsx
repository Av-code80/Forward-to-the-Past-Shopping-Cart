import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "../components/image/Image";
import { useNavigateOnEmptyPage } from "../common/hooks/useNavigateOnEmptyPage";
import { PiFilmSlate } from "react-icons/pi";
import "./NavBar.scss";

/**
 * NavBar component to navigate between different pages
 */

export const NavBar = () => {
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
      <nav className="navbar" role="navigation">
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
            <Link to="/">
              <PiFilmSlate size={40} />
            </Link>
          </li>
          <li>
            <Link onClick={handleCartClick} to="/cart">
              <span data-testid="navId" aria-label={`Cart total: ${total} euros`}>
                {total}€ <FaShoppingCart size={30} aria-hidden="true" />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
