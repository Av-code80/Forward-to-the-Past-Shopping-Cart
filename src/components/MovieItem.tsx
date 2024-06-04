import React from "react";
import { Movie } from "../data/movies";
import { useCart } from "../context/CartContext";
import "./MovieItem.scss";

type MovieItemProps = {
  movie: Movie;
};

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const { addToCart } = useCart();

  return (
    <div className="movie-item">
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Price: {movie.price}€</p>
      <button onClick={() => addToCart(movie)}>Add to Cart</button>
    </div>
  );
};

export default MovieItem;
