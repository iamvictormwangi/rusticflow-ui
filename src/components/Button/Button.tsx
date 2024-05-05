import React, { ReactNode, MouseEvent } from 'react';

interface Props {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}


const Button = ({ children, onClick, className = "", style }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${className}`}
      style={style}>
      {children}
    </button>
  );
}

export default Button;

