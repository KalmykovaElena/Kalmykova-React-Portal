import { LangSelect } from '../LangSelect/LangSelect';
import { Navbar } from '../Navbar/Navbar';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'src/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { AuthPanel } from '../Authorization/AuthPanel/AuthPanel';
import { memo } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useBurgerMenu } from 'src/providers/BurgerMenuProvider/useBurgerMenu';

const HeaderContent = () => (
  <>
    <Navbar />
    <ThemeSwitcher />
    <LangSelect />
    <AuthPanel className="auth" />
  </>
);

export const Header = memo(() => {
  const navigate = useNavigate();
  const { setIsBurgerMenuOpen } = useBurgerMenu();

  const handleLogoClick = () => {
    navigate('/');
    setIsBurgerMenuOpen!(false);
  };

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} onClick={handleLogoClick} />
      <div className={styles.content}>
        <HeaderContent />
      </div>
      <BurgerMenu>
        <HeaderContent />
      </BurgerMenu>
    </header>
  );
});
