import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AuthnModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';
import { Modal } from 'src/components/common/Modal/Modal';
import classNames from 'classnames';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  
}
export const AuthnModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [isLogin, setisLogin] = useState(true);
  const [loginError, setloginError] = useState('');

  const handleCloseModal = () => {
    setloginError(''); 
    onClose();
  };
  useEffect(() => {
    setloginError('');
  }, [isLogin]);
  return (
    <Modal
      className={styles.loginmodal}
      isOpen={isOpen}
      onClose={handleCloseModal}
      lazy
    >
      <div className={styles.title}>
        <div
          className={classNames(styles.type, { [styles.selected]: isLogin })}
          onClick={() => setisLogin(true)}
        >
          {t('Вход')}
        </div>
        <div
          className={classNames(styles.type, { [styles.selected]: !isLogin })}
          onClick={() => setisLogin(false)}
        >
          {t('Регистрация')}
        </div>
      </div>
      <div className={styles.error}>{loginError}</div>
      <LoginForm
        reset={!isOpen}
        isLogin={isLogin}
        setloginError={setloginError}
        onSuccess={handleCloseModal}
      />
    </Modal>
  );
};
