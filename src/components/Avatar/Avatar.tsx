import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Avatar = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`avatar ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Avatar;

