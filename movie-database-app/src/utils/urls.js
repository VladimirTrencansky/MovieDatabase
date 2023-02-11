export function getMoviesUrl(searchText, pageNumber) {
  return `http://omdbapi.com/?apikey=da981403&s=${searchText}&page=${pageNumber}`;
}

export function getMovieDetailUrl(movieId) {
  return `http://omdbapi.com/?apikey=da981403&i=${movieId}&plot=full`;
}
