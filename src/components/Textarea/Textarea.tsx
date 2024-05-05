import React, { ChangeEvent } from 'react';

import generateRandomString from "./../../handlers/generateRandomString"

// Interface for Input Props
interface Props {
  type?: 'text' | 'email' | 'password' | string; // Allows custom types
  label?: string;
  rows?: number;
  id?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}


// Reusable Input Component
const Input = ({
  type = 'text',
  id = generateRandomString(5),
  rows = 10,
  label,
  value,
  onChange,
  placeholder,
  className,
  style,
  disabled,
}: Props) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input ${className}`}
        style={style}
        disabled={disabled}
      />
    </>
  );
};

export default Input;

