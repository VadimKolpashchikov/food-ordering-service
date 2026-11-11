import Input from '@/components/UI/Input/Input';
import Title from '@/components/UI/Title/Title';
import ColumnPageLayout from '@/layouts/ColumnPageLayout/ColumnPageLayout';
import SearchSvg from '@/assets/svg/search.svg?react';
import styles from './MenuPage.module.scss';
import { ProductList } from '@/components/product/ProductList/ProductList';
import { products } from '@/mockData';

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
      <ProductList items={products} />
    </ColumnPageLayout>
  );
}
