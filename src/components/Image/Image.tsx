import React from 'react';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Image = ({ src, alt, width, height, className, style }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      aria-label={alt} // Accessibility: Add aria-label for screen readers
    />
  );
};

export default Image;
