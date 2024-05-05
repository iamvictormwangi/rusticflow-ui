import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Group = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`group ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Group;

