import React, { createContext, useContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { CartContextType, CartItem, MoviesType } from "../common/types/types";
import useCartTotal from "../common/hooks/useCartTotal";
import { useLocalStorage } from "../common/hooks/useLocalStorage";

/**
 * Provide cart context to its children
 * @param {ReactNode} children - The children components.
 */

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  const total = useCartTotal(cart);

  const addToCart = (movie: MoviesType) => {
    const newCartItem: CartItem = {
      uniqueId: new Date().getTime(),
      movie,
    };
    setCart((prevCart) => [...prevCart, newCartItem]);
    toast.success("Movie added to cart");
  };

  const removeFromCart = (uniqueId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.uniqueId !== uniqueId)
    );
    toast.success("Movie removed from cart");
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
