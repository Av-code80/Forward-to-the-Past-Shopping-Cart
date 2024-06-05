import React, { createContext, useContext, useState, ReactNode } from "react";
import { MoviesType } from "../data/movies";
import { toast } from "react-toastify";
import { CartContextType, CartItem } from "../commun/types/types";
import useCartTotal from "../commun/hooks/useCartTotal";
import { useLocalStorage } from "../commun/hooks/useLocalStorage";

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
