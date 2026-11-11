import Title from '@/components/UI/Title/Title';
import ColumnPageLayout from '@/layouts/ColumnPageLayout/ColumnPageLayout';
import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  return (
    <ColumnPageLayout
      header={(
        <>
          <Title>Page Not Found!</Title>
        </>
      )}
    >
      <div className={styles['not-found-page__image-wrap']}>
        <img src="/images/pizza-frame.png" alt="Пицца" />
      </div>
    </ColumnPageLayout>
  );
}
