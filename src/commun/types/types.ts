import { MoviesType } from "../../data/movies";

export type CartItem = {
  uniqueId: number;
  movie: MoviesType;
};

export interface CartContextType  {
  cart: CartItem[];
  total: number;
  addToCart: (movie: MoviesType) => void;
  removeFromCart: (uniqueId: number) => void;
  clearCart: () => void;
};
