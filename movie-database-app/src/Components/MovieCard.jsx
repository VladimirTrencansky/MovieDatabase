import { Movie, StarBorder } from "@mui/icons-material";
import { Button, CardActions, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ title, year, imgUrl, movieId }) {
  function toggleFavourite() {}

  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardHeader title={title} subheader={year} />
      <CardMedia component="img" image={imgUrl} alt="movie image" />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={toggleFavourite}>
          <StarBorder />
        </IconButton>
        <Button
          startIcon={<Movie />}
          component={Link}
          to={`/detail/${movieId}`}
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
