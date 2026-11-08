import type { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  invalid?: boolean;
  label?: string;
  name: string;
}
