import React, { useState } from "react";
import { MoviesType } from "../data/movies";
import { useCart } from "../context/CartContext";
import Image from "./image/Image";
import "./MovieItem.scss";

type MovieItemProps = {
  movie: MoviesType;
};
const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="movie-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={movie.imageUrl} alt={movie.title} />
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>Genre: {movie.category}</p>
        <p>Price: {movie.price}€</p>
        {isHovered && (
          <button onClick={() => addToCart(movie)} className="add-to-cart">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieItem;
