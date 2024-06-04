import { movies } from "../data/movies";
import MovieItem from "./MovieItem";
import "./MovieList.scss";

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
