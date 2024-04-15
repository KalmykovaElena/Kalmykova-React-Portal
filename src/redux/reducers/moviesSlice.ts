import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'src/types/types';
import { manageStoredFavorites } from 'src/utils/manageStoredFavorites';

interface MoviesState {
  favorites: Movie[];
  page:number;
}

const initialState: MoviesState = {
  favorites: [],
  page:1
};

const moviesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addMovieToFavorites: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
      manageStoredFavorites(state.favorites);
    },
    removeMovieFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.filmId !== action.payload,
      );
     manageStoredFavorites(state.favorites);
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
    addSavedFavorites: (state, action: PayloadAction<Movie[]>) => {
      state.favorites = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { actions:MoviesActions, reducer: MoviesReducer } = moviesSlice;
