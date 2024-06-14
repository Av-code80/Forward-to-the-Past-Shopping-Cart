
import useCartTotal from "../common/hooks/useCartTotal";
import { CartItem, MoviesType } from "../common/types/types";
import { MovieCategory } from "../common/types/enum";
import { renderHook } from "@testing-library/react";

describe("useCartTotal", () => {
  it("calculates the total cost of items in the cart", () => {
    const movie1: MoviesType = {
      id: 1,
      title: "Back to the Future 1",
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: "",
    };
    const movie2: MoviesType = {
      id: 2,
      title: "Back to the Future 2",
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: "",
    };
    const movie3: MoviesType = {
      id: 3,
      title: "Back to the Future 3",
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: "",
    };
    const otherMovie: MoviesType = {
      id: 4,
      title: "Some Other Movie",
      category: MovieCategory.Drama,
      price: 20,
      imageUrl: "",
    };

    const cartItems: CartItem[] = [
      { uniqueId: 1, movie: movie1 },
      { uniqueId: 2, movie: movie2 },
      { uniqueId: 3, movie: movie3 },
      { uniqueId: 4, movie: otherMovie },
    ];

    const { result } = renderHook(() => useCartTotal(cartItems));

    expect(result.current).toBe(56); 
  });

  it("applies a 10% discount for two different Back to the Future movies", () => {
    const movie1: MoviesType = {
      id: 1,
      title: "Back to the Future 1",
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: "",
    };
    const movie2: MoviesType = {
      id: 2,
      title: "Back to the Future 2",
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: "",
    };

    const cartItems: CartItem[] = [
      { uniqueId: 1, movie: movie1 },
      { uniqueId: 2, movie: movie2 },
    ];

    const { result } = renderHook(() => useCartTotal(cartItems));

    expect(result.current).toBe(27); 
  });

  it("calculates the total without any discount for a single Back to the Future movie", () => {
    const movie1: MoviesType = {
      id: 1,
      title: "Back to the Future 1",
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: "",
    };

    const cartItems: CartItem[] = [{ uniqueId: 1, movie: movie1 }];

    const { result } = renderHook(() => useCartTotal(cartItems));

    expect(result.current).toBe(15); 
  });
});
