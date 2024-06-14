import { render, screen } from "@testing-library/react";
import MovieList from "../components/movieList/MovieList";
import { movies } from "../data/movies";
import { CartProvider } from "../context/CartContext";

describe("MovieList", () => {
  test("renders the correct number of movie items", () => {
    render(
      <CartProvider>
        <MovieList />
      </CartProvider>
    );
    const movieItems = screen.getAllByRole("button", { name: /movie/i });
    expect(movieItems).toHaveLength(movies.length);
  });

  test("displays each movie's title", () => {
    render(
      <CartProvider>
        <MovieList />
      </CartProvider>
    );
    movies.forEach((movie) => {
      expect(screen.getByText(movie.title)).toBeInTheDocument();
    });
  });

  test("displays each movie's image", () => {
    render(
      <CartProvider>
        <MovieList />
      </CartProvider>
    );
    movies.forEach((movie) => {
      const image = screen.getByAltText(movie.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", movie.imageUrl);
    });
  });
});
