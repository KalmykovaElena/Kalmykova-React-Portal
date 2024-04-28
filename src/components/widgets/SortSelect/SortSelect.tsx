import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'src/components/common/Select/Select';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { Movie } from 'src/types/types';

export const SortSelectOptions = [
  { value: 'year', label: 'год' },
  { value: 'rating', label: 'рейтинг' },
];

export const SortSelect = memo(() => {
  const [sortKey, setSortKey] = useState('');
  const { renderData } = useAppSelector(({ movies }) => movies);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const onChangeSortSelect = (val: string) => {
    setSortKey(val);
  };

  useEffect(() => {
    if (sortKey && renderData) {
      const films = renderData?.films ? [...renderData.films] : [];
      let sortedFilms: Movie[];
      if (sortKey === 'rating') {
        sortedFilms = films.sort((a, b) => {
          const ratingA = a.rating || a.ratingKinopoisk || '0';
          const ratingB = b.rating || b.ratingKinopoisk || '0';
          return parseFloat(ratingB) - parseFloat(ratingA);
        });
      } else {
        sortedFilms = films.sort(
          (a, b) => parseInt(b[sortKey]) - parseInt(a[sortKey]),
        );
      }

      const data = { ...renderData, films: sortedFilms };
      if (JSON.stringify(renderData) !== JSON.stringify(data)) {
        dispatch(MoviesActions.setRenderData(data));
      }
    }
  }, [dispatch, sortKey, renderData]);
  return (
    <Select
      options={SortSelectOptions}
      onChange={onChangeSortSelect}
      label={t('сортировать по')}
      className="sort-select"
    />
  );
});
