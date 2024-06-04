import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.scss";
import Image from "./image/Image";

const Cart: React.FC = () => {
  const { cart, total, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((movie) => (
            <li key={movie.id} className="cart-elements">
              <Image
                src={movie.imageUrl}
                alt={movie.title}
              />
              {movie.title} - {movie.price}€
              <button onClick={() => removeFromCart(movie)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: {total}€</h3>
    </div>
  );
};

export default Cart;
