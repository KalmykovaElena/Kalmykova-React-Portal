import { FC } from 'react';
import styles from './MoviePage.module.scss';
import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from 'src/redux/reducers/moviesApi';
import { Loader } from 'src/components/common/Loader/Loader';
import { AppImage } from 'src/components/common/AppImage/AppImage';
import { Skeleton } from 'src/components/common/Skeleton/Skeleton';
import { ReactComponent as Logo } from 'src/assets/logo.svg';
import i18n from 'src/config/i18n';
import { Button } from 'src/components/common/Button/Button';
import { AnimatedText } from 'src/components/common/AnimatedText/AnimatedText';
import { useTranslation } from 'react-i18next';
import { FavoriteManager } from 'src/components/widgets/FavoriteManager/FavoriteManager';
import { transformObject } from 'src/utils/transformObject';
import { useAppSelector } from 'src/redux/store';

interface MoviePageProps {}
export const MoviePage: FC<MoviePageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const {
    data: { data: movie } = {},
    error,
    isLoading,
  } = useGetMovieByIdQuery(id || '');
  const { rating } = useAppSelector(({ movies }) => movies);

  if (error) {
    throw new Error(t('Ошибка получения данных о фильме'));
  }
  
  return (
    <div className={styles.moviepage}>
      {isLoading ? (
        <Loader />
      ) : (
        movie && (
          <div className={styles.content}>
            <div className={styles.details}>
              <div className={styles.title}>
                {' '}
                {i18n.language === 'ru'
                  ? movie.nameRu ?? movie.nameEn
                  : movie.nameEn ?? movie.nameRu}
              </div>
              <div className={styles.slogan}>
                {movie.slogan && <AnimatedText text={movie.slogan} />}
              </div>
              <div className={styles.info}>
                <div className={styles.time}>
                  <div>{movie.year}</div>
                  <div>
                    {movie.filmLength &&
                      movie.filmLength.split(':').map((e, i) => {
                        return i === 0
                          ? `${parseInt(e)}ч.`
                          : `${parseInt(e)}мин `;
                      })}
                  </div>
                </div>
                <div className={styles.countries}>
                  {movie.countries &&
                    movie.countries.map((country) => {
                      return `${country.country}  `;
                    })}
                </div>
                <FavoriteManager
                  item={transformObject(movie, rating)}
                  variant="star"
                  className={styles.favorite}
                />
              </div>
              <div className={styles.genres}>
                {movie.genres.map((genre, i) => {
                  return (
                    <Button variant="secondary" key={i}>
                      {genre.genre}{' '}
                    </Button>
                  );
                })}
              </div>
              <div className={styles.description}>{movie.description}</div>
            </div>
            <div className={styles.imgWrapper}>
              <AppImage
                className={styles.poster}
                src={movie.posterUrl}
                alt={movie.nameRu}
                fallback={
                  <Skeleton
                    className={styles.skeleton}
                    width="100%"
                    height="75vh"
                  />
                }
                errorFallback={<Logo />}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};
