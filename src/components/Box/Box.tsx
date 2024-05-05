import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Box = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`box ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Box;

