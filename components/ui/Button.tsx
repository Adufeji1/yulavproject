import React, { ReactNode, CSSProperties, FC } from 'react';

interface ButtonProps {
  children: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button: FC<ButtonProps> = ({ href, children, style, onClick, className }) => {
  return (
    <a href={href} className={className} style={style} onClick={onClick}>
      {children}
    </a>
  );
};

export default Button;
