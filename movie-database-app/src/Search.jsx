import { Add, Search } from "@mui/icons-material";
import { Box, Button, Skeleton, TextField } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import MoviesBoard from "MoviesBoard";
import React, { useEffect, useRef, useState } from "react";
import { useSearch, useSerchUpdate } from "./SearchContext";

async function getMovies(searchText, pageParam) {
  return await axios.get(
    `http://omdbapi.com/?apikey=da981403&s=${searchText}&page=${pageParam}`
  );
}

export default function SearchMoviesPage() {
  const searchData = useSearch();
  const setSearchData = useSerchUpdate();
  const searchRef = useRef();
  const [searchString, setSearchString] = useState("");
  const [moviesList, setMoviesList] = useState(null);
  const [moviesCount, setMoviesCount] = useState(0);

  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["moviesQuery", searchString],
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < moviesCount / 10) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
      queryFn: ({ pageParam = 1 }) => getMovies(searchString, pageParam),
      onSuccess: (data) => {
        setMoviesList(
          data.pages.length > 0 && data.pages[0].data.Response !== "False"
            ? data.pages
                .filter((page) => page.data.Response !== "False")
                .map((page) => page.data.Search)
                .flat()
            : null
        );
        setMoviesCount(
          data.pages.length > 0 && data.pages[0].data.Response !== "False"
            ? data.pages[0].data.totalResults
            : 0
        );
        if (searchString !== "" && searchData?.searchString !== searchString) {
          setSearchData({
            searchString: searchString,
            data: data,
          });
        }
      },
    });

  useEffect(() => {
    console.log(searchData);
    if (searchData) {
      searchRef.current.value = searchData.searchString;
      setSearchString(searchData.searchString);
    }
  }, []);

  function onSerchSubmit(event) {
    event.preventDefault();
    setSearchString(searchRef.current.value);
  }

  function loadNextPage() {
    fetchNextPage();
  }

  function showSearchResult() {
    let result = <h2>No movies found</h2>;
    if (isFetchingNextPage && data.pages.length < 1) {
      result = <Skeleton variant="rounded" width={345} height={250} />;
    } else if (moviesList != null && moviesList.length > 0) {
      result = <MoviesBoard movies={moviesList} />;
    }

    return result;
  }

  return (
    <>
      <Grid container spacing={1}>
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
                sx={{ paddingRight: 2,  width: 'auto'}}
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
        {showSearchResult()}
        <Grid xs={12}>
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
      </Grid>
    </>
  );
}
