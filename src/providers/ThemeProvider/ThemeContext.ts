/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light_theme',
  DARK = 'dark_theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (thene: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';