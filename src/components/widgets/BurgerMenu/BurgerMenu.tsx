import { FC, ReactNode, useState } from 'react'
import styles from './BurgerMenu.module.scss'
import classNames from 'classnames';

interface BurgerMenuProps {
  children: ReactNode;
}
export const BurgerMenu: FC<BurgerMenuProps> = ({ children }) => {
    const [isActive, setisActive] = useState(false);
    const toggleActiveMenu=()=>{
        setisActive(!isActive)
    }
  return (
    <div className={styles.burgermenu}>
      <div className={styles.toggle} onClick={toggleActiveMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={classNames(styles.menu, { [styles.active]: isActive })}
        onClick={() => setisActive(false)}
      >
        <div className={classNames({ [styles.blur]: isActive })} />
        <div
          className={classNames('burgermenu', styles.content, {
            [styles.active]: isActive,
          })}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.close} onClick={() => setisActive(false)}>
            X
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};