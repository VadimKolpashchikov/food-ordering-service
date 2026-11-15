import Title from '@/components/UI/Title/Title';
import ColumnPageLayout from '@/layouts/ColumnPageLayout/ColumnPageLayout';
import Loader from '@/components/Loader/Loader';

export default function NotFoundPage() {
  return (
    <ColumnPageLayout
      header={(
        <>
          <Title>Page Not Found!</Title>
        </>
      )}
    >
      <Loader />
    </ColumnPageLayout>
  );
}
