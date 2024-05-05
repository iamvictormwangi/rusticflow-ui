import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Tooltip = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`tooltip ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Tooltip;

