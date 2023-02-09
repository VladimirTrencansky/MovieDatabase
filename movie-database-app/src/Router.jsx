import Favourite from "Favourite";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMoviesPage from "Search";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchMoviesPage />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/" element={<SearchMoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
