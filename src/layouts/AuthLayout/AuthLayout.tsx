import { Outlet, useNavigation } from 'react-router';
import styles from './AuthLayout.module.scss';
import Loader from '@/components/Loader/Loader';
import AuthLogoSvg from '@/assets/svg/auth-logo.svg?react';

export default function AuthLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className={styles['auth-layout']}>
      <div className={styles['auth-layout__logo']}>
        <AuthLogoSvg />
      </div>

      <div className={styles['auth-layout__content']}>
        {isLoading && <Loader />}
        {!isLoading && <Outlet />}
      </div>
    </div>
  );
}
