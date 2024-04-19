/* eslint-disable no-unused-vars */
import { FC, useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';
import { Button } from 'src/components/common/Button/Button';
import { Form } from 'src/components/common/Form/Form';
import { Input } from 'src/components/common/Input/Input';
import { useTranslation } from 'react-i18next';
import { SearchOptions } from 'src/types/types';
import Select from 'src/components/common/Select/Select';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';
import { SortSelect } from '../SortSelect/SortSelect';

export const SearchBar = () => {
  const [resetSearch, setresetSearch] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { genres, searchGanre } = useAppSelector(({ movies }) => movies);
  const { setSearchTerm, setSearchGanre, setPage } = MoviesActions;

  const onSubmit = (e: SearchOptions) => {
    dispatch(setSearchTerm(e.searchByKeyWord || ''));
    setresetSearch(true);
     dispatch(setSearchGanre(''));
    dispatch(setPage(1));
  };
  const onchangeGanre = (e: string) => {
    dispatch(setSearchTerm(''));
    dispatch(setSearchGanre(e));
    dispatch(setPage(1));
  };
useEffect(()=>{
return ()=>{
  dispatch(setSearchTerm(''));
  dispatch(setSearchGanre(''));
  dispatch(setPage(1));
}
},[dispatch, setPage, setSearchGanre, setSearchTerm]);
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
          onChange={() => setresetSearch(false)}
        />

        <Button variant="search" type="submit" className={styles.searchBtn} />
      </Form>
      <Select
        options={genres}
        onChange={onchangeGanre}
        selected={searchGanre}
        className={styles.genre}
      />
      <SortSelect />
    </div>
  );
};
