import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Notification = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`notification ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Notification;

