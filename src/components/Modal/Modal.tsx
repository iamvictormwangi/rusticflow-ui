import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Modal = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`modal ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Modal;

