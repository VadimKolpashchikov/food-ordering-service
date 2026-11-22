import type { ComponentProps } from 'react';

export interface AuthFormCommentProps extends ComponentProps<'div'> {
  text?: string;
  link?: {
    to: string;
    text: string;
  };
}
