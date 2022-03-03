import { takeEvery, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  MovieDetail,
  RawResponse,
  SearchQueryPayload,
  MoviePayload,
} from "../types/types";
import { ActionTypes } from "../state/action-types";

const API_KEY = "40cec91b";

function* fetchMovies(searchQuery: SearchQueryPayload) {
  try {
    const response: RawResponse = yield axios.post(
      `https://www.omdbapi.com/?s=${searchQuery.payload.value}&apikey=${API_KEY}&page=${searchQuery.payload.page}`
    );
    const responseData = {
      data: response.data,
      searchedValue: searchQuery.payload.value,
      activePage: searchQuery.payload.page,
    };
    yield put({
      type: ActionTypes.FETCH_MOVIES_SUCCESS,
      payload: responseData,
    });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_MOVIES_FAIL });
  }
}

function* fetchMovieDetail(searchQuery: SearchQueryPayload) {
  try {
    const response: MovieDetail = yield axios.post(
      `https://www.omdbapi.com/?i=${searchQuery.payload}&apikey=${API_KEY}`
    );

    yield put({
      type: ActionTypes.FETCH_MOVIE_DETAIL_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_MOVIE_DETAIL_FAIL });
  }
}

function* addMovieToFavorites(moviePayload: MoviePayload) {
  yield put({
    type: ActionTypes.ADD_MOVIE_TO_FAVORITES_SUCCESS,
    payload: moviePayload.payload,
  });
}

function* removeMovieFromFavorites(moviePayload: MoviePayload) {
  yield put({
    type: ActionTypes.REMOVE_MOVIE_FROM_FAVORITES_SUCCESS,
    payload: moviePayload.payload,
  });
}

function* fetchMoviesFromLocalStorage() {
  try {
    const response = JSON.parse(localStorage.getItem("favoriteMovies")!);
    yield put({
      type: ActionTypes.FETCH_MOVIES_FROM_LOCAL_STORAGE_SUCCES,
      payload: response,
    });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_MOVIES_FROM_LOCAL_STORAGE_FAIL });
  }
}

export function* watchAllSagas() {
  yield all([
    takeEvery(ActionTypes.FETCH_MOVIES, fetchMovies),
    takeEvery(ActionTypes.FETCH_MOVIE_DETAIL, fetchMovieDetail),
    takeEvery(ActionTypes.ADD_MOVIE_TO_FAVORITES, addMovieToFavorites),
    takeEvery(
      ActionTypes.REMOVE_MOVIE_FROM_FAVORITES,
      removeMovieFromFavorites
    ),
    takeEvery(
      ActionTypes.FETCH_MOVIES_FROM_LOCAL_STORAGE,
      fetchMoviesFromLocalStorage
    ),
  ]);
}
