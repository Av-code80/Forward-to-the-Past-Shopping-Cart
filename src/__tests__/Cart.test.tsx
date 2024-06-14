import { render, screen } from "@testing-library/react";
import Cart from "../components/cart/Cart";
import { CartProvider, useCart } from "../context/CartContext";
import { MoviesType } from "../common/types/types";
import { MovieCategory } from "../common/types/enum";

jest.mock("../common/hooks/useNavigateOnEmptyPage", () => ({
  useNavigateOnEmptyPage: jest.fn(),
}));

jest.mock("../context/CartContext", () => {
  const originalModule = jest.requireActual("../context/CartContext");
  return {
    ...originalModule,
    useCart: jest.fn(),
  };
});

describe("Cart Component", () => {
  it("renders the selected movie item", () => {
    const movie: MoviesType = {
      id: 1,
      title: "Movie",
      category: MovieCategory.Drama,
      price: 10,
      imageUrl: "",
    };

    const mockCartItem = {
      uniqueId: 1,
      movie,
    };

    (useCart as jest.Mock).mockReturnValue({
      cart: [mockCartItem],
      total: 10,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      clearCart: jest.fn(),
    });

    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    const selectedMovie = screen.getByTestId("cartId-items");
    expect(selectedMovie).toBeInTheDocument();
    expect(selectedMovie).toHaveTextContent("Movie");
    expect(selectedMovie).toHaveTextContent("10€");
  });
});

describe("Cart Component", () => {
  test("renders the Shopping Cart header", () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
    expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();
  });

 test("displays empty cart message when there are no items", () => {
    (useCart as jest.Mock).mockReturnValue({
      cart: [],
      total: 0,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      clearCart: jest.fn(),
    });

    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
