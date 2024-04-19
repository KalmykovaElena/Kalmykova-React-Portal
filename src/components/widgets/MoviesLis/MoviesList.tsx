/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import styles from './MoviesList.module.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from 'src/types/types';
import classNames from 'classnames';


interface MoviesListProps {
  data: Movie[];
  isLoading:boolean;
  className?:string;
}
export const MoviesList: FC<MoviesListProps> = ({ data, isLoading, className }) => {
  
  return (
      <div className={classNames(styles.moviesList, [className])}>
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
