import { useContext } from 'react';
import { BurgerMenuContext } from './BurgerMenuProvider';

export const useBurgerMenu = () => useContext(BurgerMenuContext);
