import { MovieDetails } from 'src/types/types';

export const transformObject = (inputObj: MovieDetails,rating?:string) => {
  const {
    kinopoiskId,
    filmId,
    nameRu,
    nameEn,
    year,
    filmLength,
    countries,
    genres,
    ratingKinopoiskVoteCount,
    posterUrl,
    posterUrlPreview,
  } = inputObj;

  const outputObj = {
    filmId: kinopoiskId||filmId,
    nameRu,
    nameEn,
    year: String(year),
    filmLength,
    countries,
    genres,
    rating: rating ?? '',
    ratingVoteCount: ratingKinopoiskVoteCount || 0,
    posterUrl,
    posterUrlPreview,
    ratingChange: 0,
    isRatingUp: 0,
    isAfisha: 0,
  };

  return outputObj;
};
