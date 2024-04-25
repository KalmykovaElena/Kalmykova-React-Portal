import { FC } from 'react';
import styles from './MovieCard.module.scss';
import { useTranslation } from 'react-i18next';
import { FavoriteManager } from '../FavoriteManager/FavoriteManager';
import { Movie } from 'src/types/types';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import classNames from 'classnames';
import { Skeleton } from 'src/components/common/Skeleton/Skeleton';
import { AppImage } from 'src/components/common/AppImage/AppImage';
import { ReactComponent as Logo } from 'src/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';

interface MovieCardProps {
  movie: Movie;
}
export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(({ user }) => user.authUserName);
  const { posterUrl, nameRu, nameEn, genres, year, rating, ratingKinopoisk,filmId, kinopoiskId } =
    movie;
  const movieRating = Number(rating || ratingKinopoisk).toFixed(1);
  const movieId = filmId || kinopoiskId;

  const handleMovieClick = () => {
    dispatch(MoviesActions.setRating(movieRating));
  navigate(`${movieId}`);
};
  return (
    <div className={styles.moviecard} onClick={handleMovieClick}>
      <>
        <div className={styles.imgWrapper}>
          <div className={styles.rating}>{movieRating}</div>
          <AppImage
            className={classNames(styles.poster)}
            src={posterUrl}
            alt={nameRu}
            fallback={
              <Skeleton
                className={styles.skeleton}
                width="90%"
              />
            }
            errorFallback={<Logo />}
          />
        </div>
        <div className={styles.title}>
          {i18n.language === 'ru' ? nameRu ?? nameEn : nameEn ?? nameRu}
        </div>
        <div className={styles.genre}>
          {`${year},${genres.map((genre) => genre.genre).join(',')}`}
        </div>
      </>
      {isAuth && <FavoriteManager item={movie} className={styles.icon} />}
    </div>
  );
};
