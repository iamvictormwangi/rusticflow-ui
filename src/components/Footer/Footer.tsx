import React, { ReactNode } from 'react';
// import css from './Button.module.css';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Footer = ({ children, className = "", style }: Props) => {
  return (
    <footer
      className={`footer ${className}`}
      style={style}>
      {children}
    </footer>
  );
}

export default Footer;

