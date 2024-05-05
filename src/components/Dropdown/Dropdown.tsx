import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Dropdown = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`dropdown ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Dropdown;

