import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Wrapper = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`wrapper ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Wrapper;

