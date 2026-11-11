import { createBrowserRouter } from 'react-router';
import MenuPage from './pages/Menu/MenuPage';
import CartPage from './pages/Cart/Cart';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import MenuLayout from '../layouts/MenuLayout/MenuLayout';
import routes from './routes.ts';
import ProductPage from './pages/Product/ProductPage';

export default createBrowserRouter([
  {
    path: '',
    Component: MenuLayout,
    children: [
      {
        path: routes.main.path,
        Component: MenuPage,
      },
      {
        path: routes.cart.path,
        Component: CartPage,
      },
      {
        path: routes.product.path,
        Component: ProductPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);
