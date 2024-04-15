import { FC, useEffect, useState } from 'react';
import styles from './FavoriteManager.module.scss';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { ReactComponent as Heart } from 'src/assets/heart-svg.svg';
import { Movie } from 'src/types/types';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';

interface FavoriteManagerProps {
  isLong?: boolean;
  item: Movie;
  className?: string;
}
export const FavoriteManager: FC<FavoriteManagerProps> = ({
  isLong,
  item,
  className,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const dispatch = useAppDispatch();
  const authUserName = useAppSelector(({ user }) => user.authUserName);
  const favorites = useAppSelector(({ movies }) => movies.favorites);

  const handleClick = () => {
    isFavourite
      ? dispatch(MoviesActions.removeMovieFromFavorites(item.filmId))
      : dispatch(MoviesActions.addMovieToFavorites(item));
  };
  useEffect(() => {
    if (favorites) {
      if (favorites.find((movie) => movie.filmId === item.filmId)) {
        setIsFavourite(true);
      } else {
        setIsFavourite(false);
      }
    }
  }, [favorites, item.filmId]);
  return (
    <div
      className={classNames(
        styles.favoritemanager,
        { [styles.hidden]: !authUserName },
        [className],
      )}
      onClick={handleClick}
    >
      {isLong ? (
        <div className={styles.wrapper}>
          <span>
            {isFavourite ? 'Удалить из избранного' : 'Добавить в избранное'}{' '}
          </span>
          <Heart
            className={classNames(styles.heart_white, {
              [styles.heart_white_filled]: isFavourite,
            })}
          />
        </div>
      ) : (
        <Heart
          className={classNames(styles.heart_icon, {
            [styles.heart_filled]: isFavourite,
          })}
        />
      )}
    </div>
  );
};
