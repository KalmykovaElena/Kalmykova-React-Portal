import  { FC } from 'react';
import { ReactComponent as LightIcon } from 'assets/icons/light-theme.svg';
import { ReactComponent as DarkIcon} from 'assets/icons/dark-theme.svg';
import { useTranslation } from 'react-i18next';
import styles from './ThemeSwitcher.module.scss';
import { Switch } from 'components/common/Switch/Switch';
import { useTheme } from 'providers/ThemeProvider/useTheme';
import { Theme } from 'providers/ThemeProvider/ThemeContext';
import classNames from 'classnames';

interface ThemeSwitcherProps {
  checked?: boolean;
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ checked }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames(styles.wrapper, 'theme-switcher')}>
      <DarkIcon />
      <Switch
        onChange={toggleTheme}
        checked={theme === Theme.LIGHT || checked}
        checkedText={t('ночь')}
        unCheckedText={t('день')}
      />
      <LightIcon />
    </div>
  );
};
