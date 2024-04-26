import './App.scss';
import classNames from 'classnames';
import { useTheme } from 'src/providers/ThemeProvider/useTheme';
import { AppRouter } from 'src/providers/router/AppRouter';
import { Header } from 'src/components/widgets/Header/Header';
import BurgerMenuProvider from './providers/BurgerMenuProvider/BurgerMenuProvider';

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('App', [theme])}>
      <BurgerMenuProvider>
        <Header />
      </BurgerMenuProvider>
      <AppRouter />
    </div>
  );
}

export default App;
