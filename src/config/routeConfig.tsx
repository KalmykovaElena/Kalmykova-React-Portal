/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';
import {MainPage} from 'pages/MainPage/MainPage'
import { Favorites } from 'pages/Favorites/Favorites';
import { NotFound } from 'pages/NotFound/NotFound';

export enum AppRoutes {
  MAIN = 'main',
  FAVORITE = 'favorites',
  NOTFOUND ='not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FAVORITE]: '/favorites',
    [AppRoutes.NOTFOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteObject> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.FAVORITE]: {
        path: RoutePath.favorites,
        element: <Favorites />,
    },
 
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.not_found,
        element: <NotFound/>,
    },
};
