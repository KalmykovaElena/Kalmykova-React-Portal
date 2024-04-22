export type SelectOptionType = {
  value: string;
  label: string;
}[];
export interface User {
  userName: string;
  password: string;
  favorites: Movie[];
}
export interface LoginByUserNameProps extends User {
  repeatPassword: string;
}
export type ErrorType = {
  message: string;
};
export interface Genre {
  id?: number;
  genre: string;
}

export interface Movie {
  [key: string]: any;
  filmId: number;
  kinopoiskId?: number;
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  rating: string;
  ratingKinopoisk?: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: number;
  isRatingUp: number;
  isAfisha: number;
}

export interface SearchOptions {
  searchByKeyWord?: string;
  searchByGanre?: string;
}
export interface MoviesResponse {
  films: Movie[];
  pagesCount: number;
}
export interface SearchMoviesResponse extends MoviesResponse {
  keyword: string;
  searchFilmsCountResult: number;
}
export interface MovieDetails {
  kinopoiskId?: number;
  filmId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: string;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}
export interface MovieResponse {
  data: MovieDetails;
  externalId: { imdbId: string };
}
