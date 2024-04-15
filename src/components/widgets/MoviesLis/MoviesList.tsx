/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import styles from './MoviesList.module.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from 'src/types/types';

interface MoviesListProps {
  data: Movie[];
}
export const MoviesList: FC<MoviesListProps> = ({ data }) => {
  return (
    <div className={styles.moviesList}>
      {data.map((movie: Movie) => (
        <MovieCard key={movie.filmId} movie={movie} />
      ))}
    </div>
  );
};
