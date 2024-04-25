import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';
import { ReactComponent as Icon } from 'src/assets/404_error_r7j3wfcnny3n.svg';

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.notFound}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{t('Страница не найдена')}</div>
        <Icon className={styles.icon} />
      </div>
    </div>
  );
};
export default NotFound;