import type { ComponentProps, ReactNode } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  invalid?: boolean;
  label?: string;
  name: string;
  prepend?: ReactNode;
  append?: ReactNode;
  appearance?: 'big' | 'small';
}
