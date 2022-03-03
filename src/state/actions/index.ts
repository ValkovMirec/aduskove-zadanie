import { ActionTypes } from "../action-types";

interface MovieListSuccessAction {
  type: ActionTypes.FETCH_MOVIES_SUCCESS;
  payload: {
    data: object[];
    searchedValue: string;
    activePage: number;
  };
}

interface MovieListFailAction {
  type: ActionTypes.FETCH_MOVIES_FAIL;
}

interface MovieDetailSuccessAction {
  type: ActionTypes.FETCH_MOVIE_DETAIL_SUCCESS;
  payload: {
    data: {
      Title: string;
      Year: string;
      Rated: string;
      Released: string;
      Runtime: string;
      Genre: string;
      Director: string;
      Writer: string;
      Actors: string;
      Plot: string;
      Language: string;
      Country: string;
      Awards: string;
      Poster: string;
      Ratings: { Source: string; Value: string };
      Metascore: string;
      imdbRating: string;
      imdbVotes: string;
      imdbID: string;
      Type: string;
      DVD: string;
      BoxOffice: string;
      Production: string;
      Website: string;
      Response: boolean;
    };
  };
}

interface MovieDetailFailAction {
  type: ActionTypes.FETCH_MOVIE_DETAIL_FAIL;
}

interface AddMovieToFavoritesSuccessAction {
  type: ActionTypes.ADD_MOVIE_TO_FAVORITES_SUCCESS;
  payload: {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string; Value: string };
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: boolean;
  };
}

interface AddMovieToFavoritesFailAction {
  type: ActionTypes.ADD_MOVIE_TO_FAVORITES_FAIL;
}

interface RemoveMovieToFavoritesSuccessAction {
  type: ActionTypes.REMOVE_MOVIE_FROM_FAVORITES_SUCCESS;
  payload: {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string; Value: string };
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: boolean;
  };
}

interface RemoveMovieToFavoritesFailAction {
  type: ActionTypes.REMOVE_MOVIE_FROM_FAVORITES_FAIL;
}

interface FetchMoviesFromLocalStorageSuccess {
  type: ActionTypes.FETCH_MOVIES_FROM_LOCAL_STORAGE_SUCCES;
  payload: object[];
}

interface FetchMoviesFromLocalStorageFail {
  type: ActionTypes.FETCH_MOVIES_FROM_LOCAL_STORAGE_FAIL;
}

interface SetActivePageAction {
  type: ActionTypes.SET_ACTIVE_PAGE;
  payload: number;
}

export type Action =
  | MovieListSuccessAction
  | MovieListFailAction
  | MovieDetailSuccessAction
  | MovieDetailFailAction
  | AddMovieToFavoritesSuccessAction
  | AddMovieToFavoritesFailAction
  | RemoveMovieToFavoritesSuccessAction
  | RemoveMovieToFavoritesFailAction
  | FetchMoviesFromLocalStorageSuccess
  | FetchMoviesFromLocalStorageFail
  | SetActivePageAction;
