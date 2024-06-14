import React, { useCallback, useMemo } from "react";
import { useCart } from "../../context/CartContext";
import { IoTrashBinOutline } from "react-icons/io5";
import Image from "../image/Image";
import { useNavigateOnEmptyPage } from "../../common/hooks/useNavigateOnEmptyPage";
import "./Cart.scss";
import "../../index.scss";
import { CartItem } from "../../common/types/types";

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

  const groupedCartItems = useMemo(() => {
    const itemMap: Record<number, { item: CartItem; quantity: number }> = {};
    cart.forEach((item) => {
      const movieId = item.movie.id;
      itemMap[movieId]
        ? (itemMap[movieId].quantity += 1)
        : (itemMap[movieId] = { item, quantity: 1 });
    });
    return Object.values(itemMap);
  }, [cart]);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <h3>Summary:</h3>
          <ul>
            {groupedCartItems.map(({ item, quantity }) => (
              <li key={item.uniqueId} className="cart-item">
                <Image src={item.movie.imageUrl} alt={item.movie.title} />
                <div className="cart-item-details">
                  <div>
                    <span>{item.movie.title} - </span>
                    <span className="span-value">{item.movie.price}€</span>
                  </div>
                  <span className="span-value">x {quantity}</span>
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

export default Cart;
