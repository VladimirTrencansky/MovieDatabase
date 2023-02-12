import { useInfiniteQuery } from "@tanstack/react-query";
import { useSerchContextUpdate } from "Contexts/SearchContext";
import { useEffect, useState } from "react";
import { getMovies } from "utils/requests";
import { useSearchContext } from "./../Contexts/SearchContext";

const useSearch = (searchString) => {
  const [moviesList, setMoviesList] = useState(null);
  const [moviesCount, setMoviesCount] = useState(0);
  const searchContextData = useSearchContext();
  const setSearchContextData = useSerchContextUpdate();

  const updateMoviesList = (data) => {
    setMoviesList(
      data.pages.length > 0 && data.pages[0].data.Response !== "False"
        ? data.pages
            .filter((page) => page.data.Response !== "False")
            .map((page) => page.data.Search)
            .flat()
        : null
    );
  };

  const updateMoviesCount = (data) => {
    setMoviesCount(
      data.pages.length > 0 && data.pages[0].data.Response !== "False"
        ? data.pages[0].data.totalResults
        : 0
    );
  };

  const updateSearchContext = (data) => {
    if (
      searchString !== "" &&
      (searchContextData?.searchString !== searchString ||
        searchContextData?.data == null ||
        searchContextData?.data.pages.length < data.pages.length)
    ) {
      setSearchContextData({
        searchString: searchString,
        data: data,
      });
    }
  };

  useEffect(() => {
    if (searchContextData) {
      updateMoviesList(searchContextData.data);
      updateMoviesCount(searchContextData.data);
    }
  }, []);

  const { isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    enabled:
      searchString != null && searchString != searchContextData.searchString,
    queryKey: ["moviesQuery", searchString],
    getNextPageParam: (_lastPage, pages) =>
      pages.length < moviesCount / 10 ? pages.length + 1 : undefined,
    queryFn: ({ pageParam = 1 }) => getMovies(searchString, pageParam),
    onSuccess: (data) => {
      updateMoviesList(data);
      updateMoviesCount(data);
      updateSearchContext(data);
    },
  });

  return {
    moviesList,
    moviesCount,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
};

export default useSearch;
