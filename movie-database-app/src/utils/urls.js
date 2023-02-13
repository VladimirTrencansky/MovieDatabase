export const getMoviesUrl = (searchText, pageNumber) => {
  return `https://omdbapi.com/?apikey=da981403&s=${searchText}&page=${pageNumber}`;
};

export const getMovieDetailUrl = (movieId) => {
  return `https://omdbapi.com/?apikey=da981403&i=${movieId}&plot=full`;
};
