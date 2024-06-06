import React from "react";
import { movies } from "../../data/movies";
import "./MovieList.scss";

const MovieItem = React.lazy(() => import("../movieItem/MovieItem"));

const MovieList: React.FC = () => {
  return (
    <div className="movie-list" aria-live="polite" aria-busy="false">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
