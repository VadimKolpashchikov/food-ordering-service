import { createBrowserRouter } from 'react-router';
import MenuPage from '../pages/Menu/Menu';
import CartPage from '../pages/Cart/Cart';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import MenuLayout from '../layouts/Menu/MenuLayout';

export default createBrowserRouter([
  {
    path: '/',
    Component: MenuLayout,
    children: [
      {
        path: '/',
        Component: MenuPage,
      },
      {
        path: '/cart',
        Component: CartPage,
      },
    ],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
