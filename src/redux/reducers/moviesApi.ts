import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.1',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', 'a1beac30-8ffb-4688-9abb-5b2cbc0b91ff');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<any, { page?: number; pageSize?: number }>({
      query: ({ page = 1, pageSize = 10 }) =>
        `films/top?type=TOP_AWAIT_FILMS&page=${page}&pageSize=${pageSize}`,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
