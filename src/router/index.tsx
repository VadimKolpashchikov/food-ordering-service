import { createBrowserRouter } from 'react-router';
import MenuPage from './pages/Menu/MenuPage.tsx';
import CartPage from './pages/Cart/Cart.tsx';
import NotFoundPage from './pages/NotFound/NotFoundPage.tsx';
import MenuLayout from '../layouts/MenuLayout/MenuLayout.tsx';
import routes from './routes.ts';
import ProductPage from './pages/Product/ProductPage.tsx';
import axios from 'axios';
import { PREFIX } from '@/const/API.ts';
import ErrorElement from './components/ErrorElement/ErrorElement.tsx';
import Loader from '@/components/Loader/Loader.tsx';

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
        loader: async ({ params }) => {
          await new Promise((resolve) => {
            setTimeout(resolve, 2000);
          });
          const { data } = await axios.get(`${PREFIX}/products/${params.id}/`);
          return data;
        },
        HydrateFallback: Loader,
        errorElement: <ErrorElement />,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);
