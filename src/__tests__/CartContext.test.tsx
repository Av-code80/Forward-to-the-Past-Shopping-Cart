import React from "react";
import { CartProvider, useCart } from "../context/CartContext";
import { act, renderHook } from "@testing-library/react";
import { MoviesType } from "../common/types/types";
import { MovieCategory } from "../common/types/enum";
import "react-toastify/dist/ReactToastify.css";

describe("CartContext", () => {
  const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <CartProvider>{children}</CartProvider>
  );

  it("should add a movie to the cart", () => {
    const movie: MoviesType = {
      id: 1,
      title: "Movie 1",
      category: MovieCategory.Drama,
      price: 10,
      imageUrl: "",
    };

    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(movie);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].movie).toEqual(movie);
  });

  it("should provide the correct total", () => {
    const movie1: MoviesType = {
      id: 1,
      title: "Movie 1",
      category: MovieCategory.Comedy,
      price: 10,
      imageUrl: "",
    };
    const movie2: MoviesType = {
      id: 2,
      title: "Movie 2",
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: "",
    };

    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(movie1);
      result.current.addToCart(movie2);
    });

    expect(result.current.total).toBe(25);
  });
});
