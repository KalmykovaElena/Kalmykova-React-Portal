import React from 'react';
import { Loader } from 'src/components/common/Loader/Loader';
import styles from './MainPage.module.scss';
import { MovieListContainer } from 'src/components/widgets/MovieListContainer/MovieListContainer';
import { useMovieData } from 'src/hooks/useMovieData';
import { handleError } from 'src/utils/handleError';

const MainPage: React.FC = () => {
  const { isFetching, renderData, fetchError } = useMovieData();

  if (fetchError) {
    handleError(fetchError);
  }

  return (
    <main className={styles.main}>
      {isFetching ? <Loader /> : renderData && <MovieListContainer />}
    </main>
  );
};

export default MainPage;