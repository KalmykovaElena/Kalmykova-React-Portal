import React, { memo, useEffect, useState } from 'react';
import styles from './Select.module.scss';
import { SelectOptionType } from 'src/types/types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

interface SelectProps {
  options: SelectOptionType;
  selected?: string;
  label?: string;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (val: string) => void;
  style?: { [key: string]: string };
}

const Select: React.FC<SelectProps> = memo(
  ({ options, selected, label, className, onChange, style }) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>(
      selected,
    );

    const handleSelectChange = (
      event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
      setSelectedValue(event.target.value);
      onChange(event.target.value);
    };
    useEffect(() => {
      setSelectedValue(selected);
    }, [selected]);
    return (
      <fieldset className={classNames(styles.wrapper, [className])}>
        {label && (
          <legend
            className={classNames(styles.label, {
              [styles.visible]: selectedValue,
            })}
          >
            {label}
          </legend>
        )}
        <select
          className={styles.select}
          value={selectedValue || 'label'}
          onChange={handleSelectChange}
          style={style}
        >
          {label && (
            <option value="label" disabled className={styles.title}>
              {label}
            </option>
          )}
          {options.map((option) => (
            <option className={styles.option} key={uuidv4()} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
);

export default Select;
