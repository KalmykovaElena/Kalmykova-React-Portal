import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';
import { useTranslation } from 'react-i18next';
import {
  useGetGanresQuery,
  useGetMoviesQuery,
  useSearchMoviesByGanreQuery,
  useSearchMoviesQuery,
} from 'src/redux/reducers/moviesApi';
import { convertGenres } from 'src/utils/convertGenres';

export const useMovieData = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { page, renderData, searchTerm, searchGanre } = useAppSelector(
    ({ movies }) => movies,
  );

  const { data: genresList } = useGetGanresQuery();
  const { data, isLoading, error } = useGetMoviesQuery({ page });

  const {
    data: searchData,
    isLoading: isSearchLoading,
    error: searchError,
  } = useSearchMoviesQuery({ searchTerm, page });
  const {
    data: searchGenres,
    isLoading: isGenresLoading,
    error: genresError,
  } = useSearchMoviesByGanreQuery({ ganreId: +searchGanre, page });

  const { setGenres, setRenderData, setSearchGanre } = MoviesActions;

  useEffect(() => {
    if (genresList) {
      dispatch(setGenres(convertGenres(genresList.genres, t('все жанры'))));
    }
  }, [dispatch, genresList, setGenres, t]);

  useEffect(() => {
    if (searchTerm) {
      if (searchData?.keyword) {
        dispatch(setRenderData(searchData));
        setSearchGanre('');
      }
    } else if (searchGanre) {
      if (searchGenres?.items.length) {
        dispatch(
          setRenderData({
            films: searchGenres.items,
            pagesCount: searchGenres.totalPages,
          }),
        );
      }
    } else if (data) {
      dispatch(setRenderData(data));
    }
  }, [
    searchData,
    data,
    searchGenres,
    searchGanre,
    dispatch,
    setRenderData,
    setSearchGanre,
    searchTerm,
  ]);

  return {
    isFetching: isLoading || isSearchLoading || isGenresLoading,
    renderData,
    fetchError: searchError || genresError || error,
  };
};
