/* eslint-disable i18next/no-literal-string */
import { Suspense } from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';
import './config/i18n';
import { ThemeSwitcher } from 'components/widgets/ThemeSwitcher/ThemeSwitcher';
import classNames from 'classnames';
import { useTheme } from 'providers/ThemeProvider/useTheme';
import Select from 'components/common/Select/Select';
import { langSelectOptions } from 'constants/options';

function App() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  return (
    <div className={classNames('App', [theme])}>
      <Suspense fallback="">
        <Select
          options={langSelectOptions}
          onChange={(val) => i18n.changeLanguage(val)}
          selected={i18n.language}
        />
      </Suspense>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
