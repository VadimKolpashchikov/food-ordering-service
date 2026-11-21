import Title from '@/components/UI/Title/Title';
import ColumnPageLayout from '@/layouts/ColumnPageLayout/ColumnPageLayout';
import type { IProduct } from '@/types/Product.interface';
import { useLoaderData, useParams } from 'react-router';

export default function ProductPage() {
  const { id } = useParams();
  const product = useLoaderData() as IProduct;

  return (
    <ColumnPageLayout
      header={(
        <>
          <Title>123</Title>
        </>
      )}
    >
      ProductPage
      {' '}
      {id}
      {product.name}
    </ColumnPageLayout>
  );
}
