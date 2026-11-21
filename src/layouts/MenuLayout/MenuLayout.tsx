import { Outlet, useNavigation } from 'react-router';
import styles from './MenuLayout.module.scss';
import SideMenu from '../../components/SideMenu/SideMenu';
import Loader from '@/components/Loader/Loader';

export default function MenuLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className={styles['menu-layout']}>
      <div className={styles['menu-layout__menu']}>
        <SideMenu />
      </div>

      <div className={styles['menu-layout__content']}>
        {isLoading && <Loader />}
        {!isLoading && <Outlet />}
      </div>
    </div>
  );
}
