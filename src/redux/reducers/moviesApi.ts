/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesResponse, SearchMoviesResponse } from 'src/types/types';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', 'a1beac30-8ffb-4688-9abb-5b2cbc0b91ff');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, { page?: number }>({
      query: ({ page = 1 }) =>
        `v2.1/films/top?type=TOP_AWAIT_FILMS&page=${page}`,
    }),
    searchMovies: builder.query<SearchMoviesResponse, string>({
      query: (searchTerm) =>
        `v2.1/films/search-by-keyword?keyword=${searchTerm}`,
    }),
    getGanres: builder.query({
      query: (_: void) => 'v2.2/films/filters',
    }),
    searchMoviesByGanre: builder.query<any, {ganreId:number, page?: number }>({
      query: ({ganreId,page}) => `v2.2/films?genres=${ganreId}&page=${page}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useSearchMoviesQuery,
  useGetGanresQuery,
  useSearchMoviesByGanreQuery,
} = moviesApi;
