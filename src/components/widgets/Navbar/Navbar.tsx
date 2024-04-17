import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

export const Navbar = memo(() => {
    const { t } = useTranslation();
  return (
    <nav className={styles.navbar}>
      <NavLink to={'/'}>{t('Главная')}</NavLink>
      <NavLink to={'/favorites'}>{t('Избранное')}</NavLink>
    </nav>
  );
})