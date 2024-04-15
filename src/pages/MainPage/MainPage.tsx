import React, { useEffect } from 'react';
import { useGetMoviesQuery } from 'src/redux/reducers/moviesApi';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { manageStoredFavorites } from 'src/utils/manageStoredFavorites';
import { MoviesList } from 'src/components/widgets/MoviesLis/MoviesList';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';
import { Pagination } from 'src/components/widgets/Pagination/Pagination';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(({ movies }) => movies.page);
  const { data } = useGetMoviesQuery({ page });

  useEffect(() => {
    dispatch(MoviesActions.addSavedFavorites(manageStoredFavorites()));
    dispatch(MoviesActions.setPage(1));
  }, []);
  return (
    <div>
      <MoviesList data={data.films} />
      <Pagination pageCount={data.pagesCount} />
    </div>
  );
};
