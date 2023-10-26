import React from 'react';
import { Link, NavLinkProps } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps extends NavLinkProps {
  variant?: 'primary' | 'alternative' | 'cancel' | 'danger';
  size?: 'large' | 'small';
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string);
}

const LinkButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'large',
  children,
  customStyle,
  className,
  ...rest
}: ButtonProps) => {
  const getClassName = typeof className === 'function' ? className({ isActive: false, isPending: false }) : className;

  return (
    <div
      style={{
        width: size === 'large' ? '100%' : 'auto',
        ...(customStyle || {}),
      }}
    >
      
    </div>
  );
};

export default LinkButton;
