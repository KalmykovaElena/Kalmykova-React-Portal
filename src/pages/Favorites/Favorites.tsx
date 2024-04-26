import { FC, useEffect, useState } from 'react';
import styles from './Favorites.module.scss';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import classNames from 'classnames';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';
import { AuthPanel } from 'src/components/widgets/Authorization/AuthPanel/AuthPanel';
import { useTranslation } from 'react-i18next';
import { MovieListContainer } from 'src/components/widgets/MovieListContainer/MovieListContainer';
import { filterGenres } from 'src/utils/filterGenres';
import { convertGenres } from 'src/utils/convertGenres';

interface FavoritesProps {}
 const Favorites: FC<FavoritesProps> = () => {
  const { favorites, page, searchGanre, searchTerm } = useAppSelector(
    ({ movies }) => movies,
  );
  const isAuth = useAppSelector(({ user }) => user.authUserName);
  const [data, setData] = useState(favorites);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const moviesPerPage = 20;
  const pagesCount = Math.ceil(data.length / moviesPerPage);
  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  useEffect(() => {
    const renderData = data.slice(indexOfFirstMovie, indexOfLastMovie);
    dispatch(
      MoviesActions.setRenderData({
        films: renderData,
        pagesCount: pagesCount,
      }),
    );
  }, [data, dispatch, indexOfFirstMovie, indexOfLastMovie, pagesCount]);
  useEffect(() => {
    setData(favorites);
    const filteredGenres = filterGenres(favorites);
    const convertedGenres = convertGenres(filteredGenres, t('все жанры'));
    dispatch(MoviesActions.setGenres(convertedGenres));

    if (searchTerm) {
      const filterData = favorites.filter(
        (movie) =>
          movie.nameEn?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.nameRu?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.nameOriginal?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setData(filterData);
    }
    if (searchGanre) {
      const filterData = favorites.filter((movie) =>
        movie.genres.find((genre) => genre.genre === searchGanre),
      );
      setData(filterData);
    }
  }, [dispatch, favorites, searchGanre, searchTerm, t]);

  return (
    <main
      className={classNames(styles.favorites, {
        [styles.empty]: !favorites.length,
      })}
    >
      {isAuth ? (
        <MovieListContainer />
      ) : (
        <>
          <h2>
            {t(
              'Только авторизованные пользователи могут сохранять фильмы в избранные.',
            )}
          </h2>
          <AuthPanel className={styles.auth} />
        </>
      )}
    </main>
  );
};
export default Favorites