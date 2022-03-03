import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const location = useLocation().pathname;

  return (
    <div className="navigation">
      <Link className={location === "/" ? "active-link" : "link"} to="/">
        Homepage
      </Link>
      <Link
        className={location === "/my-favorites" ? "active-link" : "link"}
        to="/my-favorites"
      >
        My Favorites
      </Link>
    </div>
  );
}

export default Navigation;
