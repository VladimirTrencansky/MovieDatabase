import { Add, PlusOne, Search } from "@mui/icons-material";
import { Box, Button, Skeleton, TextField } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import axios from "axios";
import React, { useRef } from "react";
import { useMutation } from "react-query";
import MoviesBoard from "./MoviesBoard";

function getMovies(searchText) {
  return axios
    .get("http://omdbapi.com/?apikey=da981403&s=" + searchText + "&page=1")
    .then((result) => result.data);
}

export default function SearchMoviesPage() {
  const searchRef = useRef("");

  const mutation = useMutation((newMutation) => getMovies(newMutation));

  function performSearch(event) {
    event.preventDefault();
    if (searchRef.current) {
      mutation.mutate(searchRef.current.value);
    }
  }

  function showSearchResult() {
    let result = <h2>No movies found</h2>;
    if (mutation.isLoading) {
      result = <Skeleton variant="rounded" width={345} height={250} />;
    } else if (mutation.data != null && mutation.data.Search.length > 0) {
      result = <MoviesBoard movies={mutation.data.Search} />;
    }

    return result;
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid xs={6}>
          <Box component="form" onSubmit={performSearch}>
            <TextField
              id="search-bar"
              label="Find movies"
              variant="outlined"
              inputRef={searchRef}
            />
            <Button startIcon={<Search />} variant="outlined" type="submit" />
          </Box>
        </Grid>
        <Grid xs={6}>
          Results: {mutation.data ? mutation.data.totalResults : 0}
        </Grid>
        {showSearchResult()}
        <Grid xs={12}>
          <Button variant="contained" startIcon={<Add />} fullWidth>
            Load more
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
