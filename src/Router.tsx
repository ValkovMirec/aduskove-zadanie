import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import MyFavorites from "./pages/MyFavorites";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/filmId" element={<MovieDetail />} />
        <Route path="/my-favorites" element={<MyFavorites />} />
      </Routes>
    </div>
  );
}

export default Router;
