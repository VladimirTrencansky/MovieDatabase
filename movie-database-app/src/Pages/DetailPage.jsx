import { ArrowBack } from "@mui/icons-material";
import {
  Button,
  CardMedia,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
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

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Paper elevation={5} className="detail-wrapp">
          <Grid container>
            <Grid md={6}>
              <Button startIcon={<ArrowBack />} onClick={goBack}>
                Go back
              </Button>
            </Grid>
            <Grid md={6}></Grid>
            <Grid md={3}>
              <CardMedia
                component="img"
                image={data.Poster}
                alt="movie image"
                sx={{ maxHeight: 500, objectFit: "contain", width: "auto" }}
              />
            </Grid>
            <Grid container md={7}>
              <Grid md={12}>
                <Typography variant="h4" display={"inline"}>
                  {data.Title}
                </Typography>
              </Grid>
              <Grid md={12}>
                <Typography variant="subtitle2" display={"inline"}>
                  Director: {data.Director}
                  <br />
                  Writer: {data.Writer}
                  <br />
                  Actors: {data.Actors}
                </Typography>
              </Grid>
              <Grid md={12}>
                <Typography variant="caption" display={"inline"}>
                  Released: {data.Released} <br />
                  Rated: {data.Rated}
                  <br />
                  Runtime: {data.Runtime}
                  <br />
                  Genre: {data.Genre}
                  <br />
                  Awards: {data.Awards}
                  <br />
                  {data.Ratings.map((rating) => (
                    <span key={rating.Source}>
                      {rating.Source}: {rating.Value}
                      <br />
                    </span>
                  ))}
                </Typography>
              </Grid>

              <Grid lg={12}>
                <Typography variant="body1" gutterBottom>
                  Plot: {data.Plot}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
}
