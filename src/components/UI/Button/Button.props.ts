import type { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  face?: 'primary';
  size?: 'xl' | 'l';
}
