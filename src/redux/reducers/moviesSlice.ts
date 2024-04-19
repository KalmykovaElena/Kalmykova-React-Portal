import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviesResponse, SelectOptionType } from 'src/types/types';
import { manageStoredFavorites } from 'src/utils/manageStoredFavorites';

interface MoviesState {
  favorites: Movie[];
  page: number;
  renderData: MoviesResponse | undefined;
  searchTerm: string;
  searchGanre: string;
  genres: SelectOptionType;
}

const initialState: MoviesState = {
  favorites: [],
  page: 1,
  renderData: undefined,
  searchTerm: '',
  searchGanre: '',
  genres: [],
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
      state.favorites = state.favorites.filter((movie) =>
        movie.filmId
          ? movie.filmId !== action.payload
          : movie.kinopoiskId !== action.payload,
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
    setRenderData: (state, action: PayloadAction<MoviesResponse>) => {
      state.renderData = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSearchGanre: (state, action: PayloadAction<string>) => {
      state.searchGanre = action.payload;
    },
    setGenres: (state, action: PayloadAction<SelectOptionType>) => {
      state.genres = action.payload;
    },
  },
});

export const { actions: MoviesActions, reducer: MoviesReducer } = moviesSlice;
