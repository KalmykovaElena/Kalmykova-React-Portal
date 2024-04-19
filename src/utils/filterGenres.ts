import { Movie } from 'src/types/types';

export const filterGenres = (genres: Movie[]) => {
  return genres.reduce((acc: string[], movie: Movie) => {
    movie.genres.forEach((genre) => {
      if (!acc.includes(genre.genre)) {
        acc.push(genre.genre); 
      }
    });
    return acc;
  }, []);
};