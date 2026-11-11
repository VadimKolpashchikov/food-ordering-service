import Title from '@/components/UI/Title/Title';
import ColumnPageLayout from '@/layouts/ColumnPageLayout/ColumnPageLayout';
import { useParams } from 'react-router';

export default function ProductPage() {
  const { id } = useParams();

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
    </ColumnPageLayout>
  );
}
