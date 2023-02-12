import { Star, StarBorder } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import useFavouriteMovies from "./../Hooks/useFavouriteMovies";

const StarButton = ({ movie }) => {
  const { toggleFavourite, isFavourite } = useFavouriteMovies(movie);

  return (
    <Tooltip
      title={
        isFavourite ? "Remove from favourite movies" : "Add to favourite movies"
      }
    >
      <IconButton aria-label="add to favorites" onClick={toggleFavourite}>
        {isFavourite ? <Star /> : <StarBorder />}
      </IconButton>
    </Tooltip>
  );
};

export default StarButton;
