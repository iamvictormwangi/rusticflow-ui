import React, { ReactNode } from 'react';
// import css from './Button.module.css';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Parallax = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`parallax ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Parallax;

