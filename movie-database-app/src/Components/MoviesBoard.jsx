import Grid from "@mui/material/Unstable_Grid2";
import MovieCard from "Components/MovieCard";
import { PropTypes } from "prop-types";
import React from "react";

export default function MoviesBoard({ movies }) {
  return (
    <Grid container spacing={1}>
      {movies.map((movie) => (
        <Grid xs={2.4} key={movie.imdbID}>
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            imgUrl={movie.Poster}
            movieId={movie.imdbID}
          />
        </Grid>
      ))}
    </Grid>
  );
}

MoviesBoard.propTypes = {
  movies: PropTypes.array,
};
