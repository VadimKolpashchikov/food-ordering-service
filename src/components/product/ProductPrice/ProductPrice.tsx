import cn from 'classnames';
import styles from './ProductPrice.module.scss';
import type { HtmlHTMLAttributes } from 'react';

export default function ProductPrice({ value = 0, className }: {
  value?: number;
  className?: HtmlHTMLAttributes<HTMLElement>['className'];
}) {
  return (
    <div className={cn(styles['product-price'], className)}>
      {value}
      &nbsp;
      <span className={styles['product-price__currency']}>₽</span>
    </div>
  );
}
