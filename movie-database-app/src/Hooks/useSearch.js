import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSerchContextUpdate } from "Contexts/SearchContext";
import { useSearchContext } from "./../Contexts/SearchContext";
import { getMovies } from "utils/requests";

const useSearch = (searchString) => {
  const [moviesList, setMoviesList] = useState(null);
  const [moviesCount, setMoviesCount] = useState(0);
  const searchData = useSearchContext();
  const setSearchData = useSerchContextUpdate();

  const updateMoviesList = (data) => {
    console.log(data);
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
      (searchData?.searchString !== searchString ||
        searchData?.data == null ||
        searchData?.data.pages.length < data.pages.length)
    ) {
      setSearchData({
        searchString: searchString,
        data: data,
      });
    }
  };

  const { isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["moviesQuery", searchString],
    getNextPageParam: (_lastPage, pages) =>
      pages.length < moviesCount / 10 ? pages.length + 1 : undefined,
    queryFn: ({ pageParam = 1 }) => getMovies(searchString, pageParam),
    onSuccess: (data) => {
      updateMoviesList(data);
      updateMoviesCount(data);
      updateSearchContext(data);
    },
    initialData: () => {
      return searchData?.data;
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
