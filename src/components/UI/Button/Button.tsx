import cn from 'classnames';
import type { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import type { MouseEvent } from 'react';

function Button({
  type = 'button',
  face = 'primary',
  children,
  className,
  size = 'l',
  icon,
  onClick,
  ...props
}: ButtonProps) {
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick?.(e);
  };

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
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default Button;
