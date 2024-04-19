import { FC, useState } from 'react';
import styles from './MovieCard.module.scss';
import { useTranslation } from 'react-i18next';
import { FavoriteManager } from '../FavoriteManager/FavoriteManager';
import { Movie } from 'src/types/types';
import { useAppSelector } from 'src/redux/store';
import classNames from 'classnames';
import { Skeleton } from 'src/components/common/Skeleton/Skeleton';

interface MovieCardProps {
  movie: Movie;
  isLoading: boolean;
}
export const MovieCard: FC<MovieCardProps> = ({ movie, isLoading }) => {
  const { i18n } = useTranslation();
  const isAuth = useAppSelector(({ user }) => user.authUserName);
  const { posterUrl, nameRu, nameEn, genres, year, rating, ratingKinopoisk } =
    movie;
  const [imageLoaded, setImageLoaded] = useState(false);
const movieRating = Number(rating || ratingKinopoisk).toFixed(1);
  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.moviecard}>
      {isLoading ? (
        <>
          <Skeleton className={styles.skeleton} width="100%" height={300} />
          <Skeleton className={styles.title} width="100%" height={32} />
          <Skeleton className={styles.skeleton} width="50%" height={24} />
        </>
      ) : (
        <>
          <div className={styles.imgWrapper}>
            {!imageLoaded && (
              <Skeleton className={styles.skeleton} width="100%" height={300} />
            )}
            <div className={styles.rating}>{movieRating}</div>
            <img
              className={classNames(styles.poster, {
                [styles.loaded]: imageLoaded,
              })}
              src={posterUrl}
              alt={nameRu}
              onLoad={handleImageLoaded}
            />

            {/* {isAuth && <FavoriteManager item={movie} className={styles.icon} />} */}
          </div>
          <div className={styles.title}>
            {i18n.language === 'ru' ? nameRu ?? nameEn : nameEn ?? nameRu}
          </div>
          <div className={styles.genre}>
            {`${year},${genres.map((genre) => genre.genre).join(',')}`}
          </div>
        </>
      )}
      {isAuth && <FavoriteManager item={movie} className={styles.icon} />}
    </div>
  );
};
