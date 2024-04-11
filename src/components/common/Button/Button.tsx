import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: 'primary' | 'secondary' | 'outlined' | 'clear';
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = 'primary',
    onClick,
    disabled,
    ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        {
          [styles.outlined]: variant === 'outlined',
          [styles.clear]: variant === 'clear',
          [styles.primary]: variant === 'primary',
          [styles.secondary]: variant === 'secondary',
        },
        [className],
      )}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
