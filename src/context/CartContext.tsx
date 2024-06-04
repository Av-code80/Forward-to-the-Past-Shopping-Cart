import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Movie } from "../data/movies";

type CartContextType = {
  cart: Movie[];
  total: number;
  addToCart: (movie: Movie) => void;
  removeFromCart: (movie: Movie) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Movie[]>([]);
  const [total, setTotal] = useState<number>(0);


  useEffect(() => {
    const calculateTotal = (cart: Movie[]): number => {
     

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
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
