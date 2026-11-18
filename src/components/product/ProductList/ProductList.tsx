import type { IProduct } from '@/types/Product.interface';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.scss';
import { Link } from 'react-router';
import routes from '@/router/routes';
import Title from '@/components/UI/Title/Title';

export function ProductList({ items = [] }: { items?: IProduct[] }) {
  return (
    <>
      {!items?.length && (<Title level={3} className={styles['product-list__empty']}>Продукты не найдены</Title>)}

      {!!items?.length && (
        <div className={styles['product-list']}>
          {items.map((product) => (
            <Link
              className={styles['product-list__link']}
              key={product.id}
              to={routes.product.path.replace(':id', String(product.id))}
            >
              <ProductCard data={product} />
            </Link>
          ),
          )}
        </div>
      )}
    </>

  );
}
