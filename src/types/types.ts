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
export interface Movie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: number;
  isRatingUp: number;
  isAfisha: number;
}

export interface MoviesResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}