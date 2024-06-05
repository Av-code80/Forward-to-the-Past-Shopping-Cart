import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Image from "./image/Image";
import { IoTrashBinOutline } from "react-icons/io5";

import "./Cart.scss";

const Cart = () => {
  const { cart, total, removeFromCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cart, navigate]);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          <h3>Summary:</h3>
          {cart.map((movie) => (
            <li key={movie.id} className="cart-elements">
              <Image src={movie.movie.imageUrl} alt={movie.movie.title} />
              {movie.movie.title} - {movie.movie.price}€
              <button onClick={() => removeFromCart(movie.movie)}>
                <IoTrashBinOutline size={30} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: {total}€</h3>
    </div>
  );
};

export default Cart;
