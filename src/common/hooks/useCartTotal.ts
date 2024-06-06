import { useEffect, useState } from "react";
import { CartItem } from "../types/types";

/**
 * Custom hook to calculate the total cost of items in the cart
 * @param {CartItem[]} cart - The current items in the cart
 * @returns {number} The total cost
 */

const useCartTotal = (cart: CartItem[]): number => {
  const [total, setTotal] = useState<number>(0);

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

  return total;
};

export default useCartTotal;
