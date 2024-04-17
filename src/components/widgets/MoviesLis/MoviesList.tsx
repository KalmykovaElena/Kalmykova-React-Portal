/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import styles from './MoviesList.module.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from 'src/types/types';

interface MoviesListProps {
  data: Movie[];
  isLoading:boolean;
}
export const MoviesList: FC<MoviesListProps> = ({ data, isLoading }) => {
  return (
    <div className={styles.moviesList}>
      {data.map((movie: Movie) => (
        <MovieCard
          key={movie.filmId || movie.kinopoiskId}
          movie={movie}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};
