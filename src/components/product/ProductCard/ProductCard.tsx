import type { IProduct } from '@/types/Product.type';
import styles from './ProductCard.module.scss';
import Title from '@/components/UI/Title/Title';
import Button from '@/components/UI/Button/Button';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductRating from '../ProductRating/ProductRating';
import CartTransparentSvg from '@/assets/svg/cart-transparent.svg?react';

export default function ProductCard({ data }: { data: IProduct }) {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__top']}>
        <div className={styles['product-card__image-wrap']}>
          <img src={data.image} alt={data.title} />
        </div>

        <div className={styles['product-card__top-info']}>
          <ProductPrice value={data.price} />
          <Button size="m" icon="only"><CartTransparentSvg /></Button>
        </div>

        <ProductRating className={styles['product-card__rating']} value={data.rating} />
      </div>

      <div className={styles['product-card__text-wrap']}>
        <Title level={4}>{data.title}</Title>
        <p className={styles['product-card__description']}>{data.description}</p>
      </div>
    </div>
  );
}
