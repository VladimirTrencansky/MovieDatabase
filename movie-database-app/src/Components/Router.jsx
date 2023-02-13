import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const SearchMoviesPage = lazy(() => import("Pages/SearchPage"));
const DetailPage = lazy(() => import("Pages/DetailPage"));
const Favourite = lazy(() => import("Pages/FavouritePage"));

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavigationBar />
      <Routes>
        <Route
          path="/{app-name}"
          element={
            <Suspense fallback={<CircularProgress />}>
              <SearchMoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <Suspense fallback={<CircularProgress />}>
              <SearchMoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/favourite"
          element={
            <Suspense fallback={<CircularProgress />}>
              <Favourite />
            </Suspense>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Suspense fallback={<CircularProgress />}>
              <DetailPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
