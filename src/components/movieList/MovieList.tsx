/**
 * @file MovieList.tsx
 * @description Component that displays a list of movies.
 */

import React, { Suspense } from "react";
import { movies } from "../../data/movies";
import "./MovieList.scss";

const MovieItem = React.lazy(() => import("../movieItem/MovieItem"));

/**
 * MovieList component to display a list of movies
 */

const MovieList: React.FC = () => {
  return (
    <div className="movie-list" aria-live="polite" aria-busy="false">
      <Suspense fallback={<div className="loader">Loading movies...</div>}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Suspense>
    </div>
  );
};

export default MovieList;
