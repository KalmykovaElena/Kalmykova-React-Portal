import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';
import { Button } from 'src/components/common/Button/Button';
import { ReactComponent as Icon } from 'src/assets/sad_5oobsdlolnjx.svg';

export const PageError = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };
    return (
      <div className={styles.pageError}>
        <Icon className={styles.icon} />
        <p>{t('Произошла непредвиденная ошибка')}</p>
        <Button variant="primary" onClick={reloadPage}>
          {t('Обновить страницу')}
        </Button>
      </div>
    );
};
