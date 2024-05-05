import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Hero = ({ children, className = "", style }: Props) => {
  return (
    <div
      className={`hero ${className}`}
      style={style}>
      {children}
    </div>
  );
}

export default Hero;

