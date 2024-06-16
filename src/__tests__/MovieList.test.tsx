import { render, screen } from "@testing-library/react";
import MovieList from "../components/movieList/MovieList";
import { movies } from "../data/movies";
import { CartProvider } from "../context/CartContext";

describe("MovieList", () => {
  test("renders MovieList component without errors", () => {
    render(
      <CartProvider>
        <MovieList />
      </CartProvider>
    );
  });

  test("renders the correct number of movie items", () => {
    render(
      <CartProvider>
        <MovieList />
      </CartProvider>
    );
    const movieItems = screen.getAllByRole("button", { name: /movie/i });
    expect(movieItems).toHaveLength(movies.length);
  });

  test("MovieList should render a list of movies", () => {
    const { getAllByTestId } = render(
      <CartProvider>
        <MovieList />
      </CartProvider>
    );
    const movieItems = getAllByTestId("movie-item");
    expect(movieItems.length).toBe(movies.length);
  });

  test("displays each movie's title", () => {
    render(
      <CartProvider>
        <MovieList />
      </CartProvider>
    );
    movies.forEach((movie) => {
      const movieTitle = screen.getByText(movie.title);
      expect(movieTitle).toBeInTheDocument();
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

  test("MovieList component should render with correct ARIA attributes", () => {
    const { getByTestId } = render(
      <CartProvider>
        <MovieList />
      </CartProvider>
    );
    const movieList = getByTestId("movie-list");

    expect(movieList).toHaveAttribute("aria-live", "polite");
    expect(movieList).toHaveAttribute("aria-busy", "false");
  });
});
