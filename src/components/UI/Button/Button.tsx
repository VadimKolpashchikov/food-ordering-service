import cn from 'classnames';
import type { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

function Button({
  type = 'button',
  face = 'primary',
  children,
  className,
  size = 'l',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        styles['button'],
        styles[`button_${face}`],
        styles[`button_size-${size}`],
        className)}
    >
      {children}
    </button>
  );
}

export default Button;
