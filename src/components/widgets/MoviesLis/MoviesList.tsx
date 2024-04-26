/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import styles from './MoviesList.module.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from 'src/types/types';
import classNames from 'classnames';


interface MoviesListProps {
  data: Movie[];
  className?:string;
}
export const MoviesList: FC<MoviesListProps> = ({ data, className }) => {
  
  return (
      <div className={classNames(styles.moviesList, [className])}>
        {data.map((movie: Movie) => (
          <MovieCard
            key={movie.filmId || movie.kinopoiskId}
            movie={movie}
          />
        ))}
      </div>
  );
};
