export const getMoviesUrl = (searchText, pageNumber) => {
  return `http://omdbapi.com/?apikey=da981403&s=${searchText}&page=${pageNumber}`;
};

export const getMovieDetailUrl = (movieId) => {
  return `http://omdbapi.com/?apikey=da981403&i=${movieId}&plot=full`;
};
