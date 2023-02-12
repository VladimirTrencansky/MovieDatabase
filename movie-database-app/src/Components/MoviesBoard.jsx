import Grid from "@mui/material/Unstable_Grid2";
import MovieCard from "Components/MovieCard";
import PropTypes from "prop-types";
import React from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export default function MoviesBoard({ movies }) {
  const [storedMovies, setStoredMovies] = useLocalStorage(
    "favouriteMovies",
    []
  );

  return (
    <Grid container spacing={1} className={"movies-board"}>
      {movies.map((movie) => (
        <Grid xs={2.4} key={movie.imdbID}>
          <MovieCard
            movie={movie}
            storedMovies={storedMovies}
            setStoredMovies={setStoredMovies}
          />
        </Grid>
      ))}
    </Grid>
  );
}

MoviesBoard.propTypes = {
  movies: PropTypes.array,
};
