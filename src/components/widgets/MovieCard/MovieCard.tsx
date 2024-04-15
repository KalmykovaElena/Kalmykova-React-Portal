import { FC, useState } from 'react';
import styles from './MovieCard.module.scss';
import { useTranslation } from 'react-i18next';
import { FavoriteManager } from '../FavoriteManager/FavoriteManager';
import { Movie } from 'src/types/types';
import { useAppSelector } from 'src/redux/store';
import classNames from 'classnames';
import { Loader } from 'src/components/common/Loader/Loader';

interface MovieCardProps {
  movie: Movie;
}
export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { i18n } = useTranslation();
  const isAuth = useAppSelector(({ user }) => user.authUserName);
  const { posterUrl, nameRu, nameEn, genres, year, rating } = movie;
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };
  return (
    <div className={styles.moviecard}>
      <div className={styles.imgWrapper}>
        <div className={styles.rating}>{rating}</div>
        {!imageLoaded && 
          <Loader />
        }
          <img
            className={classNames(styles.poster, {
              [styles.hidden]: !imageLoaded,
            })}
            src={posterUrl}
            alt={nameRu}
            onLoad={handleImageLoaded}
          />
        
        {isAuth && <FavoriteManager item={movie} className={styles.icon} />}
      </div>
      <div className={styles.title}>
        {i18n.language === 'ru' ? nameRu ?? nameEn : nameEn ?? nameRu}
      </div>
      <div className={styles.genre}>
        {`${year},${genres.map((genre) => genre.genre).join(',')}`}
      </div>
    </div>
  );
};
