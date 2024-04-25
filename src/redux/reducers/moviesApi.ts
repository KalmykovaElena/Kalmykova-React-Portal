/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  MovieResponse,
  MoviesResponse,
  SearchMoviesResponse,
} from 'src/types/types';

const apiKey = process.env.REACT_APP_API_KEY ?? '';
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', apiKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, { page?: number }>({
      query: ({ page = 1 }) =>
        `v2.1/films/top?type=TOP_AWAIT_FILMS&page=${page}`,
    }),
    searchMovies: builder.query<
      SearchMoviesResponse,
      { searchTerm: string; page: number }
    >({
      query: ({ searchTerm, page }) =>
        `v2.1/films/search-by-keyword?keyword=${searchTerm}&page=${page}`,
    }),
    getMovieById: builder.query<MovieResponse, string>({
      query: (id) => `v2.1/films/${id}`,
    }),
    getGanres: builder.query({
      query: (_: void) => 'v2.2/films/filters',
    }),
    searchMoviesByGanre: builder.query<any, { ganreId: number; page?: number }>(
      {
        query: ({ ganreId, page }) =>
          `v2.2/films?genres=${ganreId}&page=${page}`,
      },
    ),
  }),
});

export const {
  useGetMoviesQuery,
  useSearchMoviesQuery,
  useGetGanresQuery,
  useSearchMoviesByGanreQuery,
  useGetMovieByIdQuery,
} = moviesApi;
