import { render, screen } from "@testing-library/react";
import { MoviesType } from "../common/types/types";
import { CartProvider } from "../context/CartContext";
import MovieItem from "../components/movieItem/MovieItem";
import { MovieCategory } from "../common/types/enum";
import "@testing-library/jest-dom";

const movie: MoviesType = {
  id: 1,
  title: "Back to the Future 1",
  category: MovieCategory.SciFi,
  price: 15,
  imageUrl: "/assets/images/btf1.jpeg",
};

describe("MovieItem", () => {
  test("renders movie item", () => {
    render(
      <CartProvider>
        <MovieItem movie={movie} />
      </CartProvider>
    );
    expect(screen.getByText(/Back to the Future 1/i)).toBeInTheDocument();
    expect(screen.getByText(/15€/i)).toBeInTheDocument();
  });
});
