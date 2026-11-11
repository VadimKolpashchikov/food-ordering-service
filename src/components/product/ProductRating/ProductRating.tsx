import cn from 'classnames';
import styles from './ProductRating.module.scss';
import type { HtmlHTMLAttributes } from 'react';
import StarSvg from '@/assets/svg/star.svg?react';

export default function ProductRating({ value = 0, className }: {
  value?: number;
  className?: HtmlHTMLAttributes<HTMLElement>['className'];
}) {
  return (
    <div className={cn(styles['product-rating'], className)}>
      {value}
      <StarSvg />
    </div>
  );
}
