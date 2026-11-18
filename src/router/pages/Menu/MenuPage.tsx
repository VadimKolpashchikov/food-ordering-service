import Input from '@/components/UI/Input/Input';
import Title from '@/components/UI/Title/Title';
import ColumnPageLayout from '@/layouts/ColumnPageLayout/ColumnPageLayout';
import SearchSvg from '@/assets/svg/search.svg?react';
import styles from './MenuPage.module.scss';
import { ProductList } from '@/components/product/ProductList/ProductList';
import { PREFIX } from '@/const/API';
import { useCallback, useEffect, useState } from 'react';
import type { IProduct } from '@/types/Product.interface';
import Loader from '@/components/Loader/Loader';
import axios, { AxiosError } from 'axios';

export default function MenuPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      const { data } = await axios.get<IProduct[]>(`${PREFIX}/products/`);

      if (Array.isArray(data)) {
        setProducts(data);
      }
    }
    catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setErrorMessage(e.message);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProducts();
  }, [getProducts]);

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
      {isLoading && (<Loader />)}

      {errorMessage && (
        <Title className={styles['menu-page__error']} level={5}>
          Error:
          {' '}
          {errorMessage}
        </Title>
      )}

      {!isLoading && !errorMessage && (<ProductList items={products} />)}
    </ColumnPageLayout>
  );
}
