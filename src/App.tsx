import React from "react";
import Router from "./Router";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
