import Favourite from "Pages/FavouritePage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMoviesPage from "Pages/SearchPage";
import DetailPage from "../Pages/DetailPage";
import NavigationBar from "./NavigationBar";

export default function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<SearchMoviesPage />} />
        <Route path="/search" element={<SearchMoviesPage />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
