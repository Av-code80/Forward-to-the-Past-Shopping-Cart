import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.scss";

const Cart: React.FC = () => {
  const { cart, total, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
       
        </ul>
      )}
      <h3>Total: {total}€</h3>
    </div>
  );
};

export default Cart;
