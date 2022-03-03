export interface DefaultState {
  moviesRequestSuccess: boolean;
  searchedValue: string;
  activePage: number;
  favoriteMovies: FavoriteMovie[];
  singleMovie: SingleMovie;
  movieResponse: MovieResponseSuccess;
  movieDetail: MovieDetail;
  movieRatings: MovieRatings;
}

export interface SearchQueryPayload {
  type: string;
  payload: { value: string; page: number };
}

export interface MoviePayload {
  type: string;
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
    Ratings: { Source: string; Value: string }[];
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

export interface SingleMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieResponseSuccess {
  Search?: Array<SingleMovie>;
  Error?: string;
  Response: boolean;
  totalResults: string;
}

export interface RawResponse {
  data: {
    Search?: Array<SingleMovie>;
    Response: boolean;
    totalResults?: string;
    Error?: string;
  };
}

export interface FavoriteMovie {
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
  Ratings: MovieRatings[];
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
}

export interface MovieDetail {
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
    Ratings: MovieRatings[];
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

export interface MovieRatings {
  Source: string;
  Value: string;
}
