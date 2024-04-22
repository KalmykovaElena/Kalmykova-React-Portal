import { FC, MouseEventHandler, memo, useEffect, useState } from 'react';
import styles from './FavoriteManager.module.scss';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { ReactComponent as Heart } from 'src/assets/heart-svg.svg';
import { ReactComponent as Star } from 'src/assets/star.svg';
import { Movie } from 'src/types/types';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';
import { useTranslation } from 'react-i18next';
import { AuthnModal } from '../Authorization/AuthnModal/AuthnModal';

interface FavoriteManagerProps {
  item: Movie;
  className?: string;
  variant?: 'heart' | 'star';
}
export const FavoriteManager: FC<FavoriteManagerProps> = memo(
  ({ item, className, variant = 'heart' }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isModalOpen, setisModalOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const authUserName = useAppSelector(({ user }) => user.authUserName);
    const favorites = useAppSelector(({ movies }) => movies.favorites);

    const onCloseModal = () => {
      setisModalOpen(false);
    };

const handleClick: MouseEventHandler<SVGSVGElement> = (event) => {
  event.stopPropagation();
  if (!authUserName) {
    setisModalOpen(true);
  } else {
    isFavourite
      ? dispatch(
          MoviesActions.removeMovieFromFavorites(
            item.filmId ?? item.kinopoiskId,
          ),
        )
      : dispatch(MoviesActions.addMovieToFavorites(item));
  }
};
    useEffect(() => {
      if (favorites) {
        if (
          favorites.find(
            (movie) =>
              (movie.filmId || movie.kinopoiskId) ===
              (item.filmId || item.kinopoiskId),
          )
        ) {
          setIsFavourite(true);
        } else {
          setIsFavourite(false);
        }
      }
    }, [favorites, item.filmId, item.kinopoiskId]);
    return (
      <div
        className={classNames(
          styles.favoritemanager,
          { [styles.hidden]: !authUserName },
          [className],
        )}
      >
        {variant === 'star' ? (
          <>
            <div className={styles.wrapper}>
              <Star
                className={classNames(styles.star_icon, {
                  [styles.star_filled]: isFavourite,
                })}
                onMouseOver={() => setIsTextVisible(true)}
                onMouseOut={() => setIsTextVisible(false)}
                onClick={handleClick}
              />
            </div>
            <div
              className={classNames(styles.text, {
                [styles.text_visible]: isTextVisible,
              })}
            >
              {isFavourite
                ? t('удалить из избранного')
                : t('добавить в избранное')}
            </div>
          </>
        ) : (
              <Heart
            className={classNames(styles.heart_icon, {
              [styles.heart_filled]: isFavourite,
            })}
            onClick={handleClick}
          />
        )}
        <AuthnModal isOpen={isModalOpen} onClose={onCloseModal} />
      </div>
    );
  },
);
