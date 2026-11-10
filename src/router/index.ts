import { createBrowserRouter } from 'react-router';
import MenuPage from './pages/Menu/MenuPage';
import CartPage from './pages/Cart/Cart';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import MenuLayout from '../layouts/MenuLayout/MenuLayout';
import { routeNames } from './routeNames';

export default createBrowserRouter([
  {
    path: '/',
    Component: MenuLayout,
    children: [
      {
        path: routeNames.main.path,
        Component: MenuPage,
      },
      {
        path: routeNames.cart.path,
        Component: CartPage,
      },
    ],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
