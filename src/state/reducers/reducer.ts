import { Action } from "../actions";
import { ActionTypes } from "../action-types";

const singleMovie = () => ({
  Title: "",
  Year: "",
  imdbID: "",
  Type: "",
  Poster: "",
});

const movieRatings = () => ({
  Source: "",
  Value: "",
});

const initialState = {
  moviesRequestSuccess: false,
  searchedValue: "",
  activePage: 1,
  movieResponse: {},
  favoriteMovies: [{}],
  singleMovie: singleMovie(),
  movieDetail: {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: movieRatings(),
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: false,
  },
};

const reducer = (state = initialState, action: Action) => {
  console.log("action.payload", action);
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        moviesRequestSuccess: true,
        searchedValue: action.payload.searchedValue,
        movieResponse: action.payload.data,
        activePage: action.payload.activePage,
      };

    case ActionTypes.FETCH_MOVIES_FAIL:
      return state;

    case ActionTypes.FETCH_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        movieDetail: {
          Title: action.payload.data.Title,
          Year: action.payload.data.Year,
          Rated: action.payload.data.Rated,
          Released: action.payload.data.Released,
          Runtime: action.payload.data.Runtime,
          Genre: action.payload.data.Genre,
          Director: action.payload.data.Director,
          Writer: action.payload.data.Writer,
          Actors: action.payload.data.Actors,
          Plot: action.payload.data.Plot,
          Language: action.payload.data.Language,
          Country: action.payload.data.Country,
          Awards: action.payload.data.Awards,
          Poster: action.payload.data.Poster,
          Ratings: action.payload.data.Ratings,
          Metascore: action.payload.data.Metascore,
          imdbRating: action.payload.data.imdbRating,
          imdbVotes: action.payload.data.imdbVotes,
          imdbID: action.payload.data.imdbID,
          Type: action.payload.data.Type,
          DVD: action.payload.data.DVD,
          BoxOffice: action.payload.data.BoxOffice,
          Production: action.payload.data.Production,
          Website: action.payload.data.Website,
          Response: true,
        },
      };

    case ActionTypes.FETCH_MOVIE_DETAIL_FAIL:
      return state;

    case ActionTypes.ADD_MOVIE_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };

    case ActionTypes.ADD_MOVIE_TO_FAVORITES_FAIL:
      return state;

    case ActionTypes.REMOVE_MOVIE_FROM_FAVORITES_SUCCESS:
      const newFavorites = state.favoriteMovies.filter(
        //@ts-ignore //TODO: fix this
        (movie: { Title: string }) => movie.Title !== action.payload.Title
      );
      return {
        ...state,
        favoriteMovies: newFavorites,
      };

    case ActionTypes.FETCH_MOVIES_FROM_LOCAL_STORAGE_SUCCES:
      return { ...state, favoriteMovies: action.payload };

    case ActionTypes.FETCH_MOVIES_FROM_LOCAL_STORAGE_FAIL:
      return state;

    case ActionTypes.SET_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };

    default:
      return state;
  }
};

export default reducer;
export type State = ReturnType<typeof reducer>;
