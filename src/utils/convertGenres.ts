import { Genre } from 'src/types/types';

export const convertGenres = (genres: Genre[] | string[]) => {
  return [
    { value: '', label: 'все жанры' },
    ...genres.map((genre) => {
      if (typeof genre === 'string') {
        return {
          value: genre,
          label: genre,
        };
      } else if (genre && genre.id && genre.genre) {
        return {
          value: genre.id.toString(),
          label: genre.genre,
        };
      } else {
        return {
          value: '',
          label: 'Unknown Genre',
        };
      }
    }),
  ];
};
