import { MovieCategory } from "./enum";

export type MoviesType = {
  id: number;
  title: string;
  category: MovieCategory;
  price: number;
  imageUrl: string;
};

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
