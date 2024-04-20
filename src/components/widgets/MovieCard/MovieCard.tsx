import { FC } from 'react';
import styles from './MovieCard.module.scss';
import { useTranslation } from 'react-i18next';
import { FavoriteManager } from '../FavoriteManager/FavoriteManager';
import { Movie } from 'src/types/types';
import { useAppSelector } from 'src/redux/store';
import classNames from 'classnames';
import { Skeleton } from 'src/components/common/Skeleton/Skeleton';
import { AppImage } from 'src/components/common/AppImage/AppImage';
import { ReactComponent as Logo } from 'src/assets/logo.svg';

interface MovieCardProps {
  movie: Movie;
}
export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { i18n } = useTranslation();
  const isAuth = useAppSelector(({ user }) => user.authUserName);
  const { posterUrl, nameRu, nameEn, genres, year, rating, ratingKinopoisk } =
    movie;
  const movieRating = Number(rating || ratingKinopoisk).toFixed(1);

  return (
    <div className={styles.moviecard}>
      <>
        <div className={styles.imgWrapper}>
          <div className={styles.rating}>{movieRating}</div>
          <AppImage
            className={classNames(styles.poster)}
            src={posterUrl}
            alt={nameRu}
            fallback={
              <Skeleton className={styles.skeleton} width="70%" height={300} />
            }
            errorFallback={<Logo/>}
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
