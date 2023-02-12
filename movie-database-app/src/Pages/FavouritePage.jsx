import { Alert, Grid } from "@mui/material";
import MoviesBoard from "Components/MoviesBoard";
import React from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export default function Favourite() {
  const [movies] = useLocalStorage("favouriteMovies");
  return (
    <Grid container spacing={1}>
      <Grid md={12} className="favourite-page">
        {movies.length > 0 ? (
          <MoviesBoard movies={movies} />
        ) : (
          <Alert severity="info" className="info">No favourite movies</Alert>
        )}
      </Grid>
    </Grid>
  );
}
