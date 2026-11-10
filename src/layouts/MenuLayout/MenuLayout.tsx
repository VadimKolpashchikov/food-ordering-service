import { Outlet } from 'react-router';
import styles from './MenuLayout.module.scss';
import SideMenu from '../../components/SideMenu/SideMenu';

export default function MenuLayout() {
  return (
    <div className={styles['menu-layout']}>
      <div className={styles['menu-layout__menu']}>
        <SideMenu />
      </div>

      <div className={styles['menu-layout__content']}>
        <Outlet />
      </div>
    </div>
  );
}
