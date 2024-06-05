import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { MoviesType } from "../data/movies";
import { toast } from "react-toastify";

// Définir le type pour les éléments du panier
type CartItem = {
  uniqueId: number;
  movie: MoviesType;
};

type CartContextType = {
  cart: CartItem[];
  total: number;
  addToCart: (movie: MoviesType) => void;
  removeFromCart: (uniqueId: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  const addToCart = (movie: MoviesType) => {
    const newCartItem: CartItem = {
      uniqueId: new Date().getTime(), // Utiliser l'horodatage comme identifiant unique
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

  useEffect(() => {
    const calculateTotal = (cart: CartItem[]): number => {
      let total = 0;
      const backToTheFutureMovies = cart.filter((item) =>
        item.movie.title.startsWith("Back to the Future")
      );
      const uniqueBTTFMovies = new Set(
        backToTheFutureMovies.map((item) => item.movie.title)
      ).size;

      if (uniqueBTTFMovies === 3) {
        total += backToTheFutureMovies.length * 15 * 0.8;
      } else if (uniqueBTTFMovies === 2) {
        total += backToTheFutureMovies.length * 15 * 0.9;
      } else {
        total += backToTheFutureMovies.length * 15;
      }

      total += cart
        .filter((item) => !item.movie.title.startsWith("Back to the Future"))
        .reduce((sum, item) => sum + item.movie.price, 0);

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
