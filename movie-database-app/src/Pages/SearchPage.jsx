import { Add, Search } from "@mui/icons-material";
import { Box, Button, Skeleton, TextField } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import MoviesBoard from "Components/MoviesBoard";
import React, { useEffect, useRef, useState } from "react";
import { useSearchContext } from "../Contexts/SearchContext";
import useSearch from "./../Hooks/useSearch";

export default function SearchMoviesPage() {
  const searchData = useSearchContext();
  const searchRef = useRef({ value: null });
  const [searchString, setSearchString] = useState("");

  const {
    moviesList,
    moviesCount,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useSearch(searchString);

  useEffect(() => {
    if (searchData) {
      searchRef.current.value = searchData.searchString;
      setSearchString(searchData.searchString);
    }
  }, []);

  const onSerchSubmit = (event) => {
    event.preventDefault();
    setSearchString(searchRef.current.value);
  };

  const loadNextPage = () => {
    fetchNextPage();
  };

  const showSearchResult = () => {
    let result = <h2>No movies found</h2>;
    if (moviesList != null && moviesList.length > 0) {
      result = (
        <>
          <MoviesBoard movies={moviesList} />
          <Grid md={12}>
            <Button
              variant="contained"
              startIcon={<Add />}
              fullWidth
              disabled={!hasNextPage}
              onClick={() => loadNextPage()}
            >
              Load more
            </Button>
          </Grid>
        </>
      );
    }

    return result;
  };

  return (
    <>
      <Grid container spacing={1} className={"search-page"}>
        <Grid xs={12} mx={{ paddingTop: 20 }}>
          <Grid xs={6}>
            <Box
              component="form"
              onSubmit={onSerchSubmit}
              sx={{ display: "inline-flex" }}
            >
              <TextField
                id="search-bar"
                label="Find movies"
                variant="outlined"
                inputRef={searchRef}
                sx={{ paddingRight: 2, width: "auto" }}
              />
              <Button
                startIcon={<Search />}
                variant="contained"
                type="submit"
                size="large"
              >
                Search
              </Button>
            </Box>
          </Grid>
          <Grid xs={6}>Results: {moviesCount}</Grid>
        </Grid>
        <Grid md={12} className={"serach-results"}>
          {showSearchResult()}
        </Grid>
      </Grid>
    </>
  );
}
