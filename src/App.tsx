import './App.scss';
import classNames from 'classnames';
import { useTheme } from 'src/providers/ThemeProvider/useTheme';
import { AppRouter } from 'src/providers/router/AppRouter';
import { Header } from 'src/components/widgets/Header/Header';


function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('App', [theme])}>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
