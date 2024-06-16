import { fireEvent, render, screen } from "@testing-library/react";
import { MoviesType} from "../common/types/types";
import { CartProvider, useCart } from "../context/CartContext";
import MovieItem from "../components/movieItem/MovieItem";
import { MovieCategory } from "../common/types/enum";
import "@testing-library/jest-dom";

jest.mock("../context/CartContext", () => ({
  ...jest.requireActual("../context/CartContext"),
  useCart: jest.fn(),
}));

describe("MovieItem", () => {
  const movie: MoviesType = {
    id: 1,
    title: "Test Movie",
    category: MovieCategory.Animation,
    price: 9.99,
    imageUrl: "test-image.jpg",
  };

  
  const addToCart = jest.fn();
  (useCart as jest.Mock).mockReturnValue({ addToCart });

  test("Should render the movie item with the correct details", () => {
    render(
      <CartProvider>
        <MovieItem movie={movie} />
      </CartProvider>
    );

    const movieItem = screen.getByTestId("movie-item");
    const movieTitle = screen.getByText("Test Movie");
    const movieCategory = screen.getByText((_content, element) => {
      return element?.textContent === "Category: Animation";
    });
    const moviePrice = screen.getByText((_content, element) => {
      return element?.textContent === "Price: 9.99€";
    });

    expect(movieItem).toBeInTheDocument();
    expect(movieTitle).toBeInTheDocument();
    expect(movieCategory).toBeInTheDocument();
    expect(moviePrice).toBeInTheDocument();
  });

  test("Should display Add to Cart button when hovering over MovieItem component", () => {
    render(
      <CartProvider>
        <MovieItem movie={movie} />
      </CartProvider>
    );

    const movieItem = screen.getByTestId("movie-item");
    fireEvent.mouseEnter(movieItem);

    const addToCartButton = screen.getByRole("button", {
      name: `Add ${movie.title} to cart`,
    });
    expect(addToCartButton).toBeInTheDocument();
  });

  test("should call addToCart function with the correct movie when Add to Cart button is clicked", () => {
    render(
      <CartProvider>
        <MovieItem movie={movie} />
      </CartProvider>
    );

    const movieItem = screen.getByTestId("movie-item");
    fireEvent.mouseEnter(movieItem);

    const addToCartButton = screen.getByRole("button", {
      name: `Add ${movie.title} to cart`,
    });
    fireEvent.click(addToCartButton);

    expect(addToCart).toHaveBeenCalledWith(movie);
  });

  test("Should display the movie image with the correct src and alt attributes", () => {
    render(
      <CartProvider>
        <MovieItem movie={movie} />
      </CartProvider>
    );

    const imageElement = screen.getByAltText("Test Movie");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "test-image.jpg");
  });

  test("Should display the movie title correctly", () => {
    render(
      <CartProvider>
        <MovieItem movie={movie} />
      </CartProvider>
    );
    const titleElement = screen.getByText("Test Movie");
    expect(titleElement).toBeInTheDocument();
  });

  test("Should display the movie category correctly", () => {
    render(
      <CartProvider>
        <MovieItem movie={movie} />
      </CartProvider>
    );
    const categoryElement = screen.getByText("Animation");
    expect(categoryElement).toBeInTheDocument();
  });
});

