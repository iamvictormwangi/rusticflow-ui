import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Pagination = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`pagination ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Pagination;

