'use client';

import { type FC, useId, useState } from 'react';
import styles from './Password.module.scss';
import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';
import type { InputProps } from '.';

const InputPassword: FC<InputProps> = ({
  label,
  error,
  ref,
  icon,
  onBlur,
  placeholder,
  name,
  value,
  onChange,
  className,
  ...props
}) => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className={clsx(styles.wrapper, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.content}>
        <input
          type={!showPassword ? 'password' : 'text'}
          id={id}
          ref={ref}
          placeholder={placeholder}
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          onChange={e => {
            setInputValue(e.target.value);
            if (onChange) onChange(e);
          }}
          value={inputValue}
          onBlur={onBlur}
          name={name}
          className={clsx(styles.input, {
            [`${styles.inputWithIcon}`]: icon,
            [`${styles.inputError}`]: error,
          })}
          {...props}
        />
        <span className={styles.icon}>{icon}</span>
        <span
          onClick={() => setShowPassword(prev => !prev)}
          className={styles.eye}>
          {!showPassword ? <Eye size={25} /> : <EyeOff size={25} />}
        </span>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
export default InputPassword;
