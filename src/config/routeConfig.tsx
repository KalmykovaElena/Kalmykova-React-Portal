/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
const MainPage = lazy(() => import('src/pages/MainPage/MainPage'));
const Favorites = lazy(() => import('src/pages/Favorites/Favorites'));
const NotFound = lazy(() => import('src/pages/NotFound/NotFound'));
const MoviePage = lazy(() => import('src/pages/MoviePage/MoviePage'));

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
  [AppRoutes.MOVIE]: 'movie/:id',
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
      { path: 'movie/:id', element: <MoviePage /> },
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
