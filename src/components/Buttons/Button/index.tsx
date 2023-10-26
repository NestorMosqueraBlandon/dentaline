import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styles from './Button.module.css';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'alternative' | 'cancel' | 'danger'
  size?: 'large' | 'small' 
}

const Button = ({variant = 'primary', size='large', children,  ...rest}: Props) => {
  return (
      <button 
      style={{
        width: size == 'large'? '100%' : 'auto'
      }}
      className={`${styles.btn} ${styles[variant]}`} {...rest}>
        {children}
      </button>
  )
}

export default Button;
