import React, { useState } from 'react';
import styles from './Select.module.scss';
import { SelectOptionType } from 'src/types/types';

interface SelectProps {
  options: SelectOptionType;
  selected?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (val: string) => void;
  style?: { [key: string]: string };
}

const Select: React.FC<SelectProps> = ({
  options,
  selected,
  onChange,
  style,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    selected,
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <select
      className={styles.select}
      value={selectedValue}
      onChange={handleSelectChange}
      style={style}
    >
      {options.map((option) => (
        <option
          className={styles.select}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
