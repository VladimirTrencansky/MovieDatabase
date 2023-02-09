import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import PropTypes from "prop-types";

function MovieCard({ title, year, imgUrl }) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345, maxHeight: 250}}>
      <CardHeader title={title} subheader={year} />
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt="movie image"
      />
    </Card>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default MovieCard;
