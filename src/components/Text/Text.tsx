import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  variant?: string;
  style?: React.CSSProperties;
}

const renderText = (variant: string, children: any, className: string, style: any) => {
  if (variant == "h1")
    return <h1 className={`h1 ${className}`} style={style}>{children}</h1>
  else if (variant == "h2")
    return <h2 className={`h2 ${className}`} style={style}>{children}</h2>
  else if (variant == "h3")
    return <h3 className={`h3 ${className}`} style={style}>{children}</h3>
  else if (variant == "h4")
    return <h4 className={`h4 ${className}`} style={style}>{children}</h4>
  else if (variant == "h5")
    return <h5 className={`h5 ${className}`} style={style}>{children}</h5>
  else if (variant == "h6")
    return <h6 className={`h6 ${className}`} style={style}>{children}</h6>
  else if (variant == "p")
    return <p className={`p ${className}`} style={style}>{children}</p>
  else if (variant == "span")
    return <span className={`span ${className}`} style={style}>{children}</span>
}

const Text = ({ children, className = "", style, variant = "p" }: Props) => {
  return (
    <>
      {renderText(variant, children, className, style)}
    </>
  )
}

export default Text;

