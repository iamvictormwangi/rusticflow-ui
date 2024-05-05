import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Mask = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`mask ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Mask;

