import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Panel = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`panel ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Panel;

