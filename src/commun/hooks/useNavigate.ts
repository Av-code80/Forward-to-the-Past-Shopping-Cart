import { useEffect } from "react";
import { CartItem} from "../types/types";
import { useNavigate } from "react-router-dom";


export const useNavigateOnEmptyPage = (cart: CartItem[], delay: number) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      const timer = setTimeout(() => {
        navigate("/");
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [cart, navigate]);
};
