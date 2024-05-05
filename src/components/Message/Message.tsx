import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Message = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`message ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Message;

