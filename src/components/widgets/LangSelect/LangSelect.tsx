import { Suspense, memo } from 'react';
import Select from 'src/components/common/Select/Select';
import i18n from 'src/config/i18n';
import { SelectOptionType } from 'src/types/types';

export const langSelectOptions: SelectOptionType = [
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
];

export const LangSelect= memo(() => {
  return (

      <Suspense fallback="">
        <Select
          options={langSelectOptions}
          onChange={(val) => i18n.changeLanguage(val)}
          selected={i18n.language}
        />
      </Suspense>
   
  );
})