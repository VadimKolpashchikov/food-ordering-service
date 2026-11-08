import type { ComponentProps } from 'react';

export interface FormFieldProps extends ComponentProps<'div'> {
  invalid?: boolean;
  label?: string;
}
