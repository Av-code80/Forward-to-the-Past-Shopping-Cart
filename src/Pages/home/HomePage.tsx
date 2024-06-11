import React from "react";
import MovieList from "../../components/movieList/MovieList";

const HomePage = () => {
  return (
    <main id="main-heading" aria-labelledby="main-heading">
      <MovieList />
    </main>
  );
};

export default React.memo(HomePage);
