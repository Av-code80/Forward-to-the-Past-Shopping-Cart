import { useEffect } from "react";
import { CartItem} from "../types/types";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook to navigate to the home page if the cart is empty
 * @param {CartItem[]} cart - The current items in the cart
 * @param {number} delay - The delay before navigating
 */

export const useNavigateOnEmptyPage = (cart: CartItem[], delay: number) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      const timer = setTimeout(() => {
        navigate("/");
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [cart, delay]);
};
