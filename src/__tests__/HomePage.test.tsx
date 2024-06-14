import { render, screen } from "@testing-library/react";
import HomePage from "../Pages/home/HomePage";
import { CartProvider } from "../context/CartContext";

describe("HomePage", () => {
  test("renders without crashing", () => {
    render(
      <CartProvider>
        <HomePage />
      </CartProvider>
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("renders the MovieList component", () => {
    render(
      <CartProvider>
        <HomePage />
      </CartProvider>
    );
    const movieItems = screen.getAllByTestId("movie-item");
    expect(movieItems.length).toBeGreaterThan(0);
  });

  test("render list items correctly", () => {
    render(
      <CartProvider>
        <HomePage />
      </CartProvider>
    );
  });
});
