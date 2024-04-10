import { FC, useState } from 'react';
import styles from './Switch.module.scss';
import classNames from 'classnames';

interface SwitchProps {
  checked?: boolean;
  checkedText?: string;
  unCheckedText?: string;
  className?: string;
  onChange: () => void;
}
export const Switch: FC<SwitchProps> = ({
  checked,
  checkedText = '',
  unCheckedText = '',
  className,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <label className={styles.toggle}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          onChange();
        }}
      />
      <div
        className={classNames(
          styles.switch,
          {
            [styles.checked]: isChecked,
            [styles.withText]: checkedText || unCheckedText,
          },
          [className],
        )}
      >
        <span
          className={classNames({
            [styles.hidden]: !isChecked,
          })}
        >
          {unCheckedText}
        </span>
        <span
          className={classNames(styles.text, {
            [styles.hidden]: isChecked,
          })}
        >
          {checkedText}
        </span>
      </div>
    </label>
  );
};
