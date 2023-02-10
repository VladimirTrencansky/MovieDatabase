import Favourite from "Favourite";
import NavigationBar from "NavigationBar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMoviesPage from "Search";
import SearchProvider from "./SearchContext";

export default function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/search" element={<SearchMoviesPage />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/" element={<SearchMoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
