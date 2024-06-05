import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { MoviesType } from "../data/movies";
import { toast } from "react-toastify";


type CartContextType = {
  cart: MoviesType[];
  total: number;
  addToCart: (movie: MoviesType) => void;
  removeFromCart: (movie: MoviesType) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<MoviesType[]>([]);
  const [total, setTotal] = useState<number>(0);

  const addToCart = (movie: MoviesType) => {
    setCart((prevCart) => [...prevCart, movie]);
    toast.success("Movie added to cart")
  };

  const removeFromCart = (movie: MoviesType) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== movie.id));
    toast.success("Movie removed")
  };
  
  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const calculateTotal = (cart: MoviesType[]): number => {
      let total = 0;
      const backToTheFutureMovies = cart.filter((movie) =>
        movie.title.startsWith("Back to the Future")
      );
      const uniqueBTTFMovies = new Set(
        backToTheFutureMovies.map((movie) => movie.title)
      ).size;

      if (uniqueBTTFMovies === 3) {
        total += backToTheFutureMovies.length * 15 * 0.8;
      } else if (uniqueBTTFMovies === 2) {
        total += backToTheFutureMovies.length * 15 * 0.9;
      } else {
        total += backToTheFutureMovies.length * 15;
      }

      total += cart
        .filter((movie) => !movie.title.startsWith("Back to the Future"))
        .reduce((sum, movie) => sum + movie.price, 0);

      return total;
    };

    setTotal(calculateTotal(cart));
  }, [cart]);

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
