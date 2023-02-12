import useLocalStorage from "./useLocalStorage";

const useFavouriteMovies = (movie) => {
  const [storedMovies, setStoredMovies] = useLocalStorage(
    "favouriteMovies",
    []
  );

  const toggleFavourite = () => {
    if (isFavourite) {
      setStoredMovies(storedMovies.filter((m) => m.imdbID !== movie.imdbID));
    } else {
      setStoredMovies((previousMovies) => [...previousMovies, { ...movie }]);
    }
  };

  let isFavourite = storedMovies?.find((m) => m.imdbID === movie.imdbID);

  return { toggleFavourite, isFavourite };
};

export default useFavouriteMovies;
