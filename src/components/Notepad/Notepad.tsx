import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Notepad = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`notepad ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Notepad;

