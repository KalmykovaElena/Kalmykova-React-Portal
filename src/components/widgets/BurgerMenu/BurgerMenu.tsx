import { FC, ReactNode } from 'react';
import styles from './BurgerMenu.module.scss';
import classNames from 'classnames';
import { useBurgerMenu } from 'src/providers/BurgerMenuProvider/useBurgerMenu';

interface BurgerMenuProps {
  children: ReactNode;
}
export const BurgerMenu: FC<BurgerMenuProps> = ({ children }) => {
    const { isBurgerMenuOpen, setIsBurgerMenuOpen } = useBurgerMenu();
    const toggleActiveMenu=()=>{
        setIsBurgerMenuOpen!(!isBurgerMenuOpen);
    }
  return (
    <div className={styles.burgermenu}>
      <div className={styles.toggle} onClick={toggleActiveMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={classNames(styles.menu, {
          [styles.active]: isBurgerMenuOpen,
        })}
        onClick={() => setIsBurgerMenuOpen!(false)}
      >
        <div className={classNames({ [styles.blur]: isBurgerMenuOpen })} />
        <div
          className={classNames('burgermenu', styles.content, {
            [styles.active]: isBurgerMenuOpen,
          })}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={styles.close}
            onClick={() => setIsBurgerMenuOpen!(false)}
          >
            X
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};