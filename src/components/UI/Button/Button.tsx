import cn from 'classnames';
import type { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

function Button({
  type = 'button', face = 'primary', children, className, ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        styles['button'],
        styles[`button_${face}`],
        className)}
    >
      {children}
    </button>
  );
}

export default Button;
