import Favourite from "Favourite";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "Search";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
