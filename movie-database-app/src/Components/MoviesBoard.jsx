import Grid from "@mui/material/Unstable_Grid2";
import MovieCard from "Components/MovieCard";
import PropTypes from "prop-types";
import React from "react";

export default function MoviesBoard({ movies }) {
  return (
    <Grid container spacing={1} className={"movies-board"}>
      {movies?.map((movie) => (
        <Grid md={2.4} key={movie.imdbID}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

MoviesBoard.propTypes = {
  movies: PropTypes.array,
};
