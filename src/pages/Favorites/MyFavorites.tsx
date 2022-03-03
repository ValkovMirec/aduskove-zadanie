import React from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { DefaultState, SingleMovie } from "../../types/types";
import "../../components/SearchResults/SearchResults.css";

const MyFavorites = () => {
  const myFavorites: Array<SingleMovie> = useSelector(
    (state: DefaultState) => state.favoriteMovies
  );

  const navigate = useNavigate();

  const handleRowClick = (item: string) => {
    console.log(item);
    navigate(`/detail/${item}`);
  };

  const returnMyFavorites = () => {
    if (myFavorites.length === 1) {
      return <h1>No favorites yet...</h1>;
    } else {
      return (
        <div className="search-results">
          <h3>Your favorite movies</h3>

          <table>
            {myFavorites.slice(1).map((item: SingleMovie) => (
              <tbody
                className="result-link"
                key={item.imdbID}
                onClick={() => handleRowClick(item.imdbID)}
              >
                <tr>
                  <td rowSpan={2} className="poster-cell">
                    <img
                      alt={item.Title}
                      src={item.Poster}
                      className="result-poster"
                    />
                  </td>
                  <td className="result-title">{item.Title}</td>
                </tr>
                <tr className="table-bottom-border">
                  <td className="result-year"> {item.Year}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      );
    }
  };

  return <>{returnMyFavorites()}</>;
};

export default MyFavorites;
