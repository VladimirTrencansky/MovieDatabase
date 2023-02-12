import { Movie } from "@mui/icons-material";
import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import StarButton from "./StarButton";

function MovieCard({ movie, storedMovies, setStoredMovies }) {
  let isFavourite = storedMovies?.find((m) => m.imdbID === movie.imdbID);

  const toggleFavourite = () => {
    if (isFavourite) {
      setStoredMovies(storedMovies.filter((m) => m.imdbID !== movie.imdbID));
    } else {
      setStoredMovies([...storedMovies, movie]);
    }
  };

  return (
    <Card sx={{ maxWidth: 345, height: 500 }} elevation={5}>
      <CardHeader
        title={movie.Title}
        subheader={movie.Year}
        titleTypographyProps={{
          noWrap: true,
        }}
      />
      <CardMedia component="img" image={movie.Poster} alt="movie image" />
      <CardActions>
        <StarButton
          toggleFavourite={toggleFavourite}
          isFavourite={isFavourite}
        />
        <Button
          startIcon={<Movie />}
          component={Link}
          to={`/detail/${movie.imdbID}`}
        >
          About movie
        </Button>
      </CardActions>
    </Card>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.string,
  movieId: PropTypes.string,
};

export default MovieCard;
