import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { Form } from 'src/components/common/Form/Form';
import { ErrorType, LoginByUserNameProps, User } from 'src/types/types';
import { useAppDispatch } from 'src/redux/store';
import { Input } from 'src/components/common/Input/Input';
import { Button } from 'src/components/common/Button/Button';
import { UserActions } from 'src/redux/reducers/userSlice';
import { MoviesActions } from 'src/redux/reducers/moviesSlice';

interface LoginFormProps {
  reset: boolean;
  isLogin: boolean;
  // eslint-disable-next-line no-unused-vars
  setloginError: (value: string) => void;
  onSuccess: () => void;
}
export const LoginForm: FC<LoginFormProps> = ({
  reset,
  isLogin,
  setloginError,
  onSuccess,
}) => {
  const { t } = useTranslation();
  const [error, setError] = useState<ErrorType>();
  const dispatch = useAppDispatch();

  const onLogin = (data: LoginByUserNameProps) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(
      (user: User) => user.userName === data.userName,
    );
    if (isLogin) {
      if (!foundUser || foundUser.password !== data.password) {
        setloginError(t('Неверный логин или пароль'));
      } else {
        dispatch(UserActions.setAuthUserName(foundUser.userName));
        dispatch(MoviesActions.addSavedFavorites(foundUser.favorites));
        onSuccess();
      }
    } else {
      if (foundUser) {
        setloginError(t('Такой пользователь уже существует'));
      } else if (data.password !== data.repeatPassword) {
        setError({ message: t('Пароли должны совпадать') });
      } else {
        const newUser = {
          userName: data.userName,
          password: data.password,
          favorites: [],
        };
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        dispatch(UserActions.setAuthUserName(newUser.userName));
        onSuccess();
      }
    }
  };

  return (
    <Form className={styles.loginform} onSubmit={onLogin} reset={reset}>
      <Input
        isFullfield
        placeholder={t('Введите имя')}
        autofocus
        name="userName"
        validate={{
          required: t('Обязательное поле'),
        }}
      />
      <Input
        isFullfield
        placeholder={t('Введите пароль')}
        name="password"
        validate={{
          required: t('Обязательное поле'),
          validate: isLogin
            ? undefined
            : {
                characters: (value: string) =>
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(value) ||
                  t('Содержание пароля'),
              },
          pattern: {
            value: /^[a-zA-ZА-Я0-9_!@#$%^&*()_+"-={}|>?[\]]+$/,
            message: t('Недопустимые символы'),
          },
        }}
      />
      {!isLogin && (
        <Input
          isFullfield
          placeholder={t('Повторите пароль')}
          name="repeatPassword"
          inputError={error}
          validate={{
            required: t('Обязательное поле'),
            validate: {
              characters: (value: string) =>
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(value) ||
                t('Содержание пароля'),
            },
            pattern: {
              value: /^[a-zA-ZА-Я0-9_!@#$%^&*()_+"-={}|>?[\]]+$/,
              message: t('Недопустимые символы'),
            },
          }}
        />
      )}
      <Button variant="primary" type="submit" className={styles.loginBtn}>
        {t('Отправить')}
      </Button>
    </Form>
  );
};
