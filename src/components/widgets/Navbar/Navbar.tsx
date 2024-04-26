import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useBurgerMenu } from 'src/providers/BurgerMenuProvider/useBurgerMenu';

export const Navbar = memo(() => {
    const { t } = useTranslation();
    const { setIsBurgerMenuOpen } = useBurgerMenu();
  return (
    <nav className={styles.navbar}>
      <NavLink to={'/'} onClick={() => setIsBurgerMenuOpen!(false)}>
        {t('Главная')}
      </NavLink>
      <NavLink to={'/favorites'} onClick={() => setIsBurgerMenuOpen!(false)}>
        {t('Избранное')}
      </NavLink>
    </nav>
  );
})