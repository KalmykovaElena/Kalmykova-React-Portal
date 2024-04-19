export type SelectOptionType = {
  value: string;
  label: string;
}[];
export interface User {
  userName: string;
  password: string;
  favorites: Movie[];
}
export interface LoginByUserNameProps extends User{
  repeatPassword: string;
}
export type ErrorType={
  message:string
}
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