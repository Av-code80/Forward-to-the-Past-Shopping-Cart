import useCartTotal from "../common/hooks/useCartTotal";
import { CartItem, MoviesType } from "../common/types/types";
import { MovieCategory } from "../common/types/enum";
import { renderHook } from "@testing-library/react";

   describe("useCartTotal", () => {
  test("should return 0 for an empty cart", () => {
    const { result } = renderHook(() => useCartTotal([]));
    expect(result.current).toBe(0);
  });

  test("should calculate total for a cart with regular movies", () => {
    const movie1: MoviesType = {
      id: 1,
      title: 'Movie 1',
      category: MovieCategory.Drama,
      price: 10,
      imageUrl: '',
    };
    const movie2: MoviesType = {
      id: 2,
      title: 'Movie 2',
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: '',
    };

    const cart: CartItem[] = [
      { uniqueId: 1, movie: movie1 },
      { uniqueId: 2, movie: movie2 },
    ];

    const { result } = renderHook(() => useCartTotal(cart));
    expect(result.current).toBe(25);
  });

  test('should calculate total for a cart with "Back to the Future" movies with no discount', () => {
    const bttf1: MoviesType = {
      id: 1,
      title: 'Back to the Future 1',
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: '',
    };

    const cart: CartItem[] = [
      { uniqueId: 1, movie: bttf1 },
    ];

    const { result } = renderHook(() => useCartTotal(cart));
    expect(result.current).toBe(15);
  });

  test('should apply 10% discount for 2 unique "Back to the Future" movies', () => {
    const bttf1: MoviesType = {
      id: 1,
      title: 'Back to the Future 1',
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: '',
    };
    const bttf2: MoviesType = {
      id: 2,
      title: 'Back to the Future 2',
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: '',
    };

    const cart: CartItem[] = [
      { uniqueId: 1, movie: bttf1 },
      { uniqueId: 2, movie: bttf2 },
    ];

    const { result } = renderHook(() => useCartTotal(cart));
    expect(result.current).toBe(27); 
  });

  test('should apply 20% discount for 3 unique "Back to the Future" movies', () => {
    const bttf1: MoviesType = {
      id: 1,
      title: 'Back to the Future 1',
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: '',
    };
    const bttf2: MoviesType = {
      id: 2,
      title: 'Back to the Future 2',
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: '',
    };
    const bttf3: MoviesType = {
      id: 3,
      title: 'Back to the Future 3',
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: '',
    };

    const cart: CartItem[] = [
      { uniqueId: 1, movie: bttf1 },
      { uniqueId: 2, movie: bttf2 },
      { uniqueId: 3, movie: bttf3 },
    ];

    const { result } = renderHook(() => useCartTotal(cart));
    expect(result.current).toBe(36); 
  });

  test('should calculate total for a mixed cart with discounts applied correctly', () => {
    const bttf1: MoviesType = {
      id: 1,
      title: 'Back to the Future 1',
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: '',
    };
    const bttf2: MoviesType = {
      id: 2,
      title: 'Back to the Future 2',
      category: MovieCategory.SciFi,
      price: 15,
      imageUrl: '',
    };
    const otherMovie: MoviesType = {
      id: 3,
      title: 'Movie 3',
      category: MovieCategory.Drama,
      price: 20,
      imageUrl: '',
    };

    const cart: CartItem[] = [
      { uniqueId: 1, movie: bttf1 },
      { uniqueId: 2, movie: bttf2 },
      { uniqueId: 3, movie: otherMovie },
    ];

    const { result } = renderHook(() => useCartTotal(cart));
    expect(result.current).toBe(47); 
  });
});
  
