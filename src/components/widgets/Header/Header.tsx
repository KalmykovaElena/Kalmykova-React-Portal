import { LangSelect } from '../LangSelect/LangSelect';
import { Navbar } from '../Navbar/Navbar';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'src/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { AuthPanel } from '../Authorization/AuthPanel/AuthPanel';
import { memo } from 'react';

export const Header = memo(() => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} onClick={() => navigate('/')} />
      <Navbar />
      <ThemeSwitcher />
      <LangSelect />
      <AuthPanel />
    </header>
  );
});
