import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/my-favorites">My Favorites</Link>
    </div>
  );
}

export default Navigation;
