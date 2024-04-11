import { Suspense } from 'react';
import styles from './LangSelect.module.scss'
import Select from 'components/common/Select/Select';
import { langSelectOptions } from 'constants/options';
import i18n from 'config/i18n';

export const LangSelect= () => {
  return (

      <Suspense fallback="">
        <Select
          options={langSelectOptions}
          onChange={(val) => i18n.changeLanguage(val)}
          selected={i18n.language}
        />
      </Suspense>
   
  );
}