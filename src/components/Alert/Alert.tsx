import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Alert = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`alert ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Alert;

