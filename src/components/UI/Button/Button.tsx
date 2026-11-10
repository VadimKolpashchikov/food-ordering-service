import cn from 'classnames';
import type { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

function Button({
  type = 'button',
  face = 'primary',
  children,
  className,
  size = 'l',
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        className,
        styles['button'],
        styles[`button_${face}`],
        styles[`button_size-${size}`],
        { [styles[`button_icon`]]: icon },
        { [styles[`button_icon-${icon}`]]: icon },
      )}
    >
      {children}
    </button>
  );
}

export default Button;
