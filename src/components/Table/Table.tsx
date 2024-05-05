import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Table = ({ children, className = "", style }: Props) => {
  return (
    <table
      className={`table ${className}`}
      style={style}>
      {children}
    </table>
  );
}

export default Table;

