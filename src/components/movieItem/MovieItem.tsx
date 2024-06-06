import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import Image from "../image/Image";
import "./MovieItem.scss";
import { MoviesType } from "../../common/types/types";

/**
 * MovieItem component display movie's details and add-to-cart button
 * @param {MovieItemProps} props
 */

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
      onMouseLeave={() => setIsHovered(true)}
      aria-label={`Movie ${movie.title}`}
      role="button"
      tabIndex={0}
    >
      <Image src={movie.imageUrl} alt={movie.title} />
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>
          <span>Category: </span>
          {movie.category}
        </p>
        <p>
          <span>Price: </span>
          {movie.price}€
        </p>
        {isHovered && (
          <button
            onClick={() => addToCart(movie)}
            className="add-to-cart"
            aria-label={`Add ${movie.title} to cart`}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieItem;
