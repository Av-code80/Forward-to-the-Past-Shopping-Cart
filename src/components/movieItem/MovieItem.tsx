import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Image from "../image/Image";
import { MoviesType } from "../../common/types/types";
import "./MovieItem.scss";

/**
 * MovieItem component display movie's details and add-to-cart button
 * @param {MovieItemProps} props
 */

type MovieItemProps = {
  movie: MoviesType;
};
export default function MovieItem({ movie }: MovieItemProps) {
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
      data-testid="movie-item"
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
}
