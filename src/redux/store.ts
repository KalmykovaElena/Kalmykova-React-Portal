import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { UserReducer } from './reducers/userSlice';
import { moviesApi } from './reducers/moviesApi';
import {  MoviesReducer } from './reducers/moviesSlice';
import errorHandlingMiddleware from './middlewares/errorHandlingMiddleware';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    movies: MoviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      moviesApi.middleware,
      errorHandlingMiddleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
