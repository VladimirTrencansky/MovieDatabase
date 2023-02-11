import axios from "axios";
import { getMovieDetailUrl, getMoviesUrl } from "./urls";

export const getMovies = async (searchText, pageParam) => {
  return await axios.get(getMoviesUrl(searchText, pageParam));
};

export const getMovieDetail = async (movieId) => {
  let result = await axios.get(getMovieDetailUrl(movieId));
  return result.data;
};
