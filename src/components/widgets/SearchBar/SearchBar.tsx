/* eslint-disable no-unused-vars */
import { FC, useState } from 'react';
import styles from './SearchBar.module.scss';
import { Button } from 'src/components/common/Button/Button';
import { Form } from 'src/components/common/Form/Form';
import { Input } from 'src/components/common/Input/Input';
import { useTranslation } from 'react-i18next';
import { useGetGanresQuery } from 'src/redux/reducers/moviesApi';
import { SearchOptions } from 'src/types/types';
import Select from 'src/components/common/Select/Select';

interface SearchBarProps {
  onSearch: (value: string) => void;
  onSearchGanre: (value: string) => void;
  selected?:string;
}
interface Genre {
  id: number;
  genre: string;
}
export const SearchBar: FC<SearchBarProps> = ({
  onSearch,
  onSearchGanre,
  selected,
}) => {
  const [resetSearch, setresetSearch] = useState(false);
  const { t } = useTranslation();
  const { data} = useGetGanresQuery();
  const genres = data
    ? [
        { value: '', label: 'все жанры' },
        ...data.genres.map(({ id, genre }: Genre) => {
          return {
            value: id,
            label: genre,
          };
        }),
      ]
    : [];

  const onSubmit = (e: SearchOptions) => {
    onSearch(e.searchByKeyWord || '');
    setresetSearch(true);
  };
  const onchangeGanre = (e: string) => {
     onSearch('')
    onSearchGanre(e);
  };

  return (
    <div className={styles.searchbar}>
      <Form
        className={styles.searchform}
        onSubmit={onSubmit}
        reset={resetSearch}
      >
        <Input
          isFullfield
          placeholder={t('Поиск')}
          autofocus
          name="searchByKeyWord"
          maxLength={20}
          className="search-input"
        />

        <Button variant="search" type="submit" className={styles.searchBtn} />
      </Form>
      <Select options={genres} onChange={onchangeGanre} selected={selected} />
    </div>
  );
};
