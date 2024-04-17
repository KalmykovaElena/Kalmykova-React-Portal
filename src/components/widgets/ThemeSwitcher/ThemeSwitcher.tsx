import  { FC, memo } from 'react';
import { ReactComponent as LightIcon } from 'src/assets/icons/light-theme.svg';
import { ReactComponent as DarkIcon} from 'src/assets/icons/dark-theme.svg';
import { useTranslation } from 'react-i18next';
import styles from './ThemeSwitcher.module.scss';
import { Switch } from 'src/components/common/Switch/Switch';
import { useTheme } from 'src/providers/ThemeProvider/useTheme';
import { Theme } from 'src/providers/ThemeProvider/ThemeContext';
import classNames from 'classnames';

interface ThemeSwitcherProps {
  checked?: boolean;
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ checked }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames(styles.wrapper, 'theme-switcher')}>
      <DarkIcon />
      <Switch
        onChange={toggleTheme}
        checked={theme === Theme.LIGHT || checked}
        checkedText={t('день')}
        unCheckedText={t('ночь')}
      />
      <LightIcon />
    </div>
  );
});
