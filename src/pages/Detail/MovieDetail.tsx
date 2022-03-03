import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/reducers/reducer";
import likedIcon from "../../assets/liked.png";
import notLikedIcon from "../../assets/not-liked.png";
import loadingSpinner from "../../assets/loading-spinner.gif";
import { FavoriteMovie } from "../../types/types";
import { ActionTypes } from "../../state/action-types";
import "./MovieDetail.css";

const MovieDetail = () => {
  const [isFavorite, setAsFavorite] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state: State) => state.movieDetail);
  const favoriteMovies = useSelector((state: State) => state.favoriteMovies);

  const checkFavorites = () => {
    const isInFavorites = favoriteMovies.find(
      //@ts-ignore //TODO: fix this
      (movie: FavoriteMovie): boolean => movie.Title === movieDetail.Title
    );

    isInFavorites ? setAsFavorite(true) : setAsFavorite(false);
  };

  useEffect(() => {
    dispatch({ type: ActionTypes.FETCH_MOVIE_DETAIL, payload: params.imdbID });
    checkFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    checkFavorites();
  });

  const handleFavorites = () => {
    const isInFavorites = favoriteMovies.find(
      // @ts-ignore
      (movie: FavoriteMovie): boolean => movie.Title === movieDetail.Title
    );

    if (!isInFavorites) {
      dispatch({
        type: ActionTypes.ADD_MOVIE_TO_FAVORITES,
        payload: movieDetail,
      });
    } else {
      dispatch({
        type: ActionTypes.REMOVE_MOVIE_FROM_FAVORITES,
        payload: movieDetail,
      });
    }
  };

  const returnMovieDetail = () => {
    if (params.imdbID !== movieDetail.imdbID) {
      return (
        <img
          alt="Loading..."
          className="loading-spinner"
          src={loadingSpinner}
        />
      );
    } else {
      return (
        <div className="detail-page">
          <div className="detail-header">
            <h2 className="detail-heading">{movieDetail.Title}</h2>
            <img
              alt={movieDetail.Title}
              className="like-icon"
              src={isFavorite ? likedIcon : notLikedIcon}
              onClick={handleFavorites}
            />
          </div>
          <div className="detail-content">
            <img
              alt={`${movieDetail.Title} poster`}
              className="detail-poster"
              src={movieDetail.Poster}
            />
            <table className="detail-info">
              <tbody>
                <tr>
                  <td className="span-label">Actors:</td>
                  <td>{movieDetail.Actors}</td>
                </tr>
                <tr>
                  <td className="span-label">Awards:</td>
                  <td>{movieDetail.Awards}</td>
                </tr>
                <tr>
                  <td className="span-label">Country:</td>
                  <td> {movieDetail.Country}</td>
                </tr>
                <tr>
                  <td className="span-label">Director:</td>
                  <td>{movieDetail.Director}</td>
                </tr>
                <tr>
                  <td className="span-label">Genre:</td>
                  <td>{movieDetail.Genre}</td>
                </tr>
                <tr>
                  <td className="span-label">Plot:</td>
                  <td>{movieDetail.Plot}</td>
                </tr>
                <tr>
                  <td className="span-label">Released:</td>
                  <td>{movieDetail.Released}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  return <>{returnMovieDetail()}</>;
};

export default MovieDetail;
