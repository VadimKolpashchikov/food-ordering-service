import Input from '@/components/UI/Input/Input';
import Title from '@/components/UI/Title/Title';
import ColumnPageLayout from '@/layouts/ColumnPageLayout/ColumnPageLayout';
import SearchSvg from '@/assets/svg/search.svg?react';
import styles from './MenuPage.module.scss';

export default function MenuPage() {
  return (
    <ColumnPageLayout
      header={(
        <>
          <Title>Меню</Title>
          <Input
            className={styles['menu-page__search']}
            name="search"
            placeholder="Введите блюдо или состав"
            appearance="small"
            prepend={<SearchSvg />}
          />
        </>
      )}
    >
      <div>MENU PAGE 1234567890 MENU PAGE</div>
    </ColumnPageLayout>
  );
}
