/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  useGetMoviesQuery,
  useSearchMoviesByGanreQuery,
  useSearchMoviesQuery,
} from 'src/redux/reducers/moviesApi';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { manageStoredFavorites } from 'src/utils/manageStoredFavorites';
import { MoviesList } from 'src/components/widgets/MoviesLis/MoviesList';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';
import { Pagination } from 'src/components/widgets/Pagination/Pagination';
import { Loader } from 'src/components/common/Loader/Loader';
import styles from './MainPage.module.scss';
import { useTranslation } from 'react-i18next';
import { SearchBar } from 'src/components/widgets/SearchBar/SearchBar';
import { MoviesResponse } from 'src/types/types';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(({ movies }) => movies.page);
  const [renderData, setRenderData] = useState<MoviesResponse>();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchGanre, setSearchGanre] = useState('');
  const { t } = useTranslation();
  const { data, isLoading } = useGetMoviesQuery({ page });
  const { data: searchData, isLoading: isSearchLoading } =
    useSearchMoviesQuery(searchTerm);
  const { data: searchGanres, isLoading: isGanresLoading } =
    useSearchMoviesByGanreQuery(searchGanre);

  useEffect(() => {
    dispatch(MoviesActions.addSavedFavorites(manageStoredFavorites()));
    dispatch(MoviesActions.setPage(1));
  }, []);

  useEffect(() => {
    if (searchData?.keyword) {
      setRenderData(searchData);
      setSearchGanre('');
    } else if (searchGanre && searchGanres?.items.length) {
      setRenderData({
        films: searchGanres.items,
        pagesCount: searchGanres.totalPages,
      });
    } else {
      setRenderData(data);
    }
  }, [searchData, data, searchGanres]);
  return (
    <main className={styles.main}>
      {isLoading || isSearchLoading || isGanresLoading ? (
        <Loader />
      ) : (
        renderData && (
          <>
            <SearchBar
              onSearch={setSearchTerm}
              onSearchGanre={setSearchGanre}
              selected={searchGanre}
            />
            <h2 className={styles.title}>
              {searchTerm ? (
                <>
                  {t('Фильмы по запросу')}{' '}
                  <span className={styles.searchTerm}>{searchTerm}</span>
                </>
              ) : (
                t('Фильмы')
              )}
            </h2>
            <MoviesList
              data={renderData.films}
              isLoading={isLoading || isSearchLoading || isGanresLoading}
            />
            <Pagination pageCount={renderData.pagesCount} />
          </>
        )
      )}
    </main>
  );
};
