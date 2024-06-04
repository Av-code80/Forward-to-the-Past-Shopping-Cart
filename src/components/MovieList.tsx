import React from "react";
import { movies } from "../data/movies";
import MovieItem from "./MovieItem";
import "./MovieList.scss";

const MovieList: React.FC = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
