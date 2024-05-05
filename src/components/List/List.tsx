import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const List = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`list ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default List;

