import { Suspense, memo } from 'react';
import Select from 'src/components/common/Select/Select';
import { langSelectOptions } from 'src/constants/options';
import i18n from 'src/config/i18n';

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