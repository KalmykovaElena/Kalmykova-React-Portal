import React, { ButtonHTMLAttributes, FC, memo } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { ReactComponent as SearchIcon } from 'src/assets/search.svg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: 'primary' | 'secondary' | 'outlined' | 'clear' | 'search';
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    variant = 'primary',
    onClick,
    disabled,
    ...otherProps
  } = props;

  const renderContent = () => {
    return variant === 'search' ? <SearchIcon /> : children;
  };
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
          [styles.search]: variant === 'search',
        },
        [className],
      )}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {renderContent()}
    </button>
  );
});
