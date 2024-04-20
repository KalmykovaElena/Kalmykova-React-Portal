/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import styles from './MovieListContainer.module.scss';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';
import { manageStoredFavorites } from 'src/utils/manageStoredFavorites';
import { SearchBar } from '../SearchBar/SearchBar';
import { MoviesList } from '../MoviesLis/MoviesList';
import { useTranslation } from 'react-i18next';
import { Pagination } from '../Pagination/Pagination';
import classNames from 'classnames';

interface MovieListContainerProps {
  pagesCount?: number;
}
export const MovieListContainer: FC<MovieListContainerProps> = ({
  
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { renderData, searchTerm } = useAppSelector(({ movies }) => movies);
  useEffect(() => {
    dispatch(MoviesActions.addSavedFavorites(manageStoredFavorites()));
    dispatch(MoviesActions.setPage(1));
  }, []);
  return (
    <section className={styles.movielistcontainer}>
      <div
        className={classNames(styles.search, )}
      >
        <SearchBar />
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
      </div>
      <div
        className={classNames(styles.content, {
          [styles.centered]: !renderData?.films.length,
        })}
      >
        {renderData?.films.length ? (
          <>
            <MoviesList data={renderData.films} />
            <Pagination />
          </>
        ) : (
          <h2>{t('Фильмы не найдены')}</h2>
        )}
      </div>
    </section>
  );
};
