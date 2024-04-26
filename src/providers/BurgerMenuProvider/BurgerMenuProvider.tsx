/* eslint-disable no-unused-vars */
import { Dispatch, FC, SetStateAction, createContext, useMemo, useState } from 'react';

interface BurgerMenuContextProps {
  isBurgerMenuOpen?: boolean;
  setIsBurgerMenuOpen?: Dispatch<SetStateAction<boolean>>;
}
export const BurgerMenuContext = createContext<BurgerMenuContextProps>({});

type BurgerMenuProviderProps = {
  children: React.ReactNode;
};

const BurgerMenuProvider: FC<BurgerMenuProviderProps> = ({ children }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
const defaultProps = useMemo(
  () => ({
    isBurgerMenuOpen,
    setIsBurgerMenuOpen,
  }),
  [isBurgerMenuOpen],
);


  return (
    <BurgerMenuContext.Provider value={defaultProps}>
      {children}
    </BurgerMenuContext.Provider>
  );
};
export default BurgerMenuProvider;