import { movies } from "../../data/movies";
import "./MovieList.scss";
import MovieItem from "../movieItem/MovieItem";

/**
 * MovieList component to display a list of movies
 */

export default function MovieList() {
  return (
    <div
      className="movie-list"
      aria-live="polite"
      aria-busy="false"
      data-testid="movie-list"
    >
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}






