import { render, screen } from "@testing-library/react";
import Cart from "../components/cart/Cart";
import { CartProvider } from "../context/CartContext";

jest.mock("../common/hooks/useNavigateOnEmptyPage", () => ({
  useNavigateOnEmptyPage: jest.fn(),
}));

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
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
