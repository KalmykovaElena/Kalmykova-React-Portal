import { Button } from 'components/common/Button/Button';
import { LangSelect } from '../LangSelect/LangSelect';
import { Navbar } from '../Navbar/Navbar';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); 
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} onClick={() => navigate('/')} />
      <Navbar />
      <>
        <ThemeSwitcher />
        <LangSelect />
        <Button variant="outlined" type="submit">
          {t('Войти')}
        </Button>
      </>
    </header>
  );
};
