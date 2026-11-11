import type { IProduct } from '@/types/Product.type';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.scss';
import { Link } from 'react-router';
import routes from '@/router/routes';

export function ProductList({ items = [] }: { items?: IProduct[] }) {
  return (
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
  );
}
