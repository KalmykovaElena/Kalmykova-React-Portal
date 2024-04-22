/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';
import { MainPage } from 'src/pages/MainPage/MainPage';
import { Favorites } from 'src/pages/Favorites/Favorites';
import { NotFound } from 'src/pages/NotFound/NotFound';
import { MoviePage } from 'src/pages/MoviePage/MoviePage';

export enum AppRoutes {
  MAIN = 'main',
  FAVORITE = 'favorites',
  MOVIE = 'movie',
  NOTFOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.FAVORITE]: '/favorites',
  [AppRoutes.NOTFOUND]: '*',
  [AppRoutes.MOVIE]: ':id',
};

export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.FAVORITE]: {
    path: RoutePath.favorites,
    children: [
      { index: true, element: <Favorites /> },
      { path: ':id', element: <MoviePage /> },
    ],
  },
  [AppRoutes.MOVIE]: {
    path: RoutePath.movie,
    element: <MoviePage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
};
