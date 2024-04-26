/* eslint-disable no-unused-vars */
import { FC, useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';
import { Button } from 'src/components/common/Button/Button';
import { Form } from 'src/components/common/Form/Form';
import { Input } from 'src/components/common/Input/Input';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ClearIcon } from 'src/assets/close-circle-svgrepo-com.svg';
import Select from 'src/components/common/Select/Select';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';
import { SortSelect } from '../SortSelect/SortSelect';
import { useDebounce } from 'src/hooks/useDebounce';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { genres, searchGanre, searchTerm } = useAppSelector(
    ({ movies }) => movies,
  );
  const { setSearchTerm, setSearchGanre, setPage } = MoviesActions;

  const onChangeSearch = useDebounce((val: string) => {
    dispatch(setSearchTerm(val));
    dispatch(setSearchGanre(''));
    dispatch(setPage(1));
  }, 300);
  const resetSearchParams = () => {
    setSearchValue('');
    dispatch(setPage(1));
    dispatch(setSearchTerm(''));
  };
  const onchangeGanre = (e: string) => {
    dispatch(setSearchGanre(e));
    resetSearchParams();
  };
  
  useEffect(() => {
    return () => {
      dispatch(setSearchTerm(''));
      dispatch(setSearchGanre(''));
      dispatch(setPage(1));
    };
  }, [dispatch, setPage, setSearchGanre, setSearchTerm]);
  return (
    <div className={styles.searchbar}>
      <Form className={styles.searchform}>
        <Input
          isFullfield
          placeholder={t('Поиск')}
          autofocus
          value={searchValue}
          name="searchByKeyWord"
          maxLength={18}
          className="search-input"
          onChange={(val) => {
            setSearchValue(val);
            onChangeSearch(val);
          }}
        />
        <ClearIcon className={styles.searchClear} onClick={resetSearchParams} />
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
