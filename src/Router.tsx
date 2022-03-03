import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import MovieDetail from "./pages/Detail/MovieDetail";
import MyFavorites from "./pages/Favorites/MyFavorites";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:imdbID" element={<MovieDetail />} />
        <Route path="/my-favorites" element={<MyFavorites />} />
      </Routes>
    </div>
  );
}

export default Router;
