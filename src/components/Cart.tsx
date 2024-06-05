import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5"; 
import "./Cart.scss";
import Image from "./image/Image";

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
        <>
          <h3>Summary:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.uniqueId}>
                <Image src={item.movie.imageUrl} alt={item.movie.title} />
                <div>
                  <span>{item.movie.title}</span> - {item.movie.price}€
                </div>
                <button onClick={() => removeFromCart(item.uniqueId)}>
                  <IoTrashBinOutline size={30} />
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      <h3>Total: {total}€</h3>
    </div>
  );
};

export default Cart;
