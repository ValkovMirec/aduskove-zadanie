import React, { useEffect } from "react";
import Router from "./Router";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";
import { State } from "./state/reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "./state/action-types";

function App() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state: State) => state.favoriteMovies);

  useEffect(() => {
    dispatch({ type: ActionTypes.FETCH_MOVIES_FROM_LOCAL_STORAGE });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return (
    <div className="App">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
