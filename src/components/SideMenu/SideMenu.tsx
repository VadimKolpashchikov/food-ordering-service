import { NavLink } from 'react-router';
import routes from '../../router/routes.ts';
import styles from './SideMenu.module.scss';
import Button from '../UI/Button/Button';
import CartSvg from '@/assets/svg/cart.svg?react';
import MenuSvg from '@/assets/svg/menu.svg?react';
import PowerSvg from '@/assets/svg/power.svg?react';
import cn from 'classnames';

export default function SideMenu() {
  return (
    <div className={styles['side-menu']}>
      <div className={styles['side-menu__user-info']}>
        <div className={styles['side-menu__user-avatar']}>
          <img src="/images/user-avatar.png" alt="User avatar" />
        </div>
        <p className={styles['side-menu__user-name']}>
          User Name
        </p>
        <p className={styles['side-menu__user-email']}>
          user@.user.ru
        </p>
      </div>

      <div className={styles['side-menu__menu-items']}>
        <NavLink className={({ isActive }) => cn(
          styles['side-menu__menu-item'],
          { [styles.active]: isActive },
        )} to={routes.main.path}
        >
          <MenuSvg />
          Меню
        </NavLink>
        <NavLink className={({ isActive }) => cn(
          styles['side-menu__menu-item'],
          { [styles.active]: isActive },
        )} to={routes.cart.path}
        >
          <CartSvg />
          Корзина
          <div className={styles['side-menu__menu-item-counter']}>2</div>
        </NavLink>
      </div>

      <div className={styles['side-menu__actions']}>
        <Button
          size="m"
          icon="start"
          className={styles['exit-action']}
          type="button"
        >
          <PowerSvg />
          Выйти
        </Button>
      </div>
    </div>
  );
}
