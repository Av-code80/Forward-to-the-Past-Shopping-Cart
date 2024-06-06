import React, { useCallback } from "react";
import { useCart } from "../../context/CartContext";
import { IoTrashBinOutline } from "react-icons/io5";
import "./Cart.scss";
import Image from "../image/Image";
import { useNavigateOnEmptyPage } from "../../common/hooks/useNavigateOnEmptyPage";
import "../../index.scss";

/**
 * Cart component to display the shopping cart
 */

const Cart: React.FC = () => {
  const { cart, total, removeFromCart } = useCart();
  const delay: number = 1000;
  useNavigateOnEmptyPage(cart, delay);

  const handleRemove = useCallback(
    (uniqueId: number) => {
      removeFromCart(uniqueId);
    },
    [removeFromCart]
  );

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
              <li key={item.uniqueId} className="cart-item">
                <Image src={item.movie.imageUrl} alt={item.movie.title} />
                <div className="cart-item-details">
                  <span>{item.movie.title}</span> - {item.movie.price}€
                </div>
                <button
                  onClick={() => handleRemove(item.uniqueId)}
                  aria-label={`Remove ${item.movie.title} from cart`}
                >
                  <IoTrashBinOutline size={30} aria-hidden="true" />
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

export default React.memo(Cart);
