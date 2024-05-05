import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Progress = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`progress ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Progress;

