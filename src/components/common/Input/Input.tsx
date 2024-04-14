import React, { InputHTMLAttributes, memo, useEffect } from 'react';
import classNames from 'classnames';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styles from './Input.module.scss';
import { ErrorType } from 'src/types/types';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  isFullfield?: boolean;
  autofocus?: boolean;
  name: string;
  validate?: RegisterOptions;
  inputError?: ErrorType;
}
export const Input = memo((props: InputProps) => {
  const {
    value,
    onChange,
    className,
    type = 'text',
    isFullfield,
    autofocus,
    name,
    validate,
    inputError,
    ...otherProps
  } = props;
  const {
    register,
    formState: { errors },
    setFocus,
    setError,clearErrors
  } = useFormContext();
  const { t } = useTranslation();

  useEffect(() => {
    if (autofocus) {
      setFocus(name);
    }
  }, [autofocus, name, setFocus]);

  useEffect(()=>{
  if(inputError?.message){
    setError(name, { type: 'custom',...inputError });
  }else{
clearErrors(name)
  }
  },[clearErrors, inputError, name, setError]);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  const message = errors[name]?.message;

  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        value={value}
        {...register(name, { onChange: onChangeHandler, ...validate })}
        className={classNames(
          styles.input,
          {
            [styles.fullfield]: isFullfield,
            [styles.inputError]: errors[name],
          },
          [className],
        )}
        {...otherProps}
      />
      <div className={styles.error}>
        {errors[name] && t(message!.toString())}
      </div>
    </div>
  );
});
