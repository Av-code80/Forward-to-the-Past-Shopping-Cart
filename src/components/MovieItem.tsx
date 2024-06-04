import React from "react";
import { MoviesType } from "../data/movies";
import { useCart } from "../context/CartContext";
import "./MovieItem.scss";
import Image from "./image/Image";


type MovieItemProps = {
  movie: MoviesType;
};

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const { addToCart } = useCart();

  return (
    <div className="movie-item">
      <Image src={movie.imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Genre: {movie.category}</p>
      <p>Price: {movie.price}€</p>
      <button onClick={() => addToCart(movie)}>Add to Cart</button>
    </div>
  );
};

export default MovieItem;
