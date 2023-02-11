import { ArrowBack } from "@mui/icons-material";
import { Box, Button, CardMedia } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetail } from "utils/requests";

export default function DetailPage() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { isLoading, data } = useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => getMovieDetail(id),
  });

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid md={12}>
              <Button startIcon={<ArrowBack />} onClick={goBack}>
                Go back
              </Button>
            </Grid>
            <Grid md={3}>
              <CardMedia
                component="img"
                image={data.Poster}
                alt="movie image"
                sx={{ maxHeight: 500, objectFit: "contain", width: "auto" }}
              />
            </Grid>
            <Grid container md={7}>
              <Grid lg={12}>{data.Title}</Grid>
              <Grid lg={12}>Released: {data.Released}</Grid>
              <Grid lg={12}>Rated: {data.Rated}</Grid>
              <Grid lg={12}>Runtime: {data.Runtime}</Grid>
              <Grid lg={12}>Director: {data.Director}</Grid>
              <Grid lg={12}>Writer: {data.Writer}</Grid>
              <Grid lg={12}>Actors: {data.Actors}</Grid>
              <Grid lg={12}>Genre: {data.Genre}</Grid>
              <Grid lg={12}>Awards: {data.Awards}</Grid>
              <Grid lg={12}>
                Ratings:
                {data.Ratings.map(
                  (rating) => `${rating.Source}: ${rating.Value}`
                )}
              </Grid>
              <Grid lg={12}>Plot: {data.Plot}</Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
