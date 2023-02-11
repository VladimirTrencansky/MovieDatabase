import axios from "axios";
import { getMovieDetailUrl, getMoviesUrl } from "./urls";

export async function getMovies(searchText, pageParam) {
  return await axios.get(getMoviesUrl(searchText, pageParam));
}

export async function getMovieDetail(movieId) {
  let result = await axios.get(getMovieDetailUrl(movieId));
  return result.data;
}
