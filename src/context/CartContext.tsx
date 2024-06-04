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

  const addToCart = (movie: Movie) => {
    setCart((prevCart) => [...prevCart, movie]);
  };

  const removeFromCart = (movie: Movie) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== movie.id));
  };

  useEffect(() => {
    const calculateTotal = (cart: Movie[]): number => {
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
