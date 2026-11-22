import { createBrowserRouter, Navigate } from 'react-router';
import MenuPage from './pages/Menu/MenuPage.tsx';
import CartPage from './pages/Cart/CartPage.tsx';
import MenuLayout from '../layouts/MenuLayout/MenuLayout.tsx';
import routes from './routes.ts';
import ProductPage from './pages/Product/ProductPage.tsx';
import axios from 'axios';
import { PREFIX } from '@/const/API.ts';
import ErrorElement from './components/ErrorElement/ErrorElement.tsx';
import Loader from '@/components/Loader/Loader.tsx';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout.tsx';
import LoginPage from './pages/Login/LoginPage.tsx';
import RegisterPage from './pages/Register/RegisterPage.tsx';

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
    ],
  },
  {
    path: routes.auth.path,
    Component: AuthLayout,
    children: [
      {
        index: true,
        element: <Navigate to={routes.login.path} replace />,
      },
      {
        path: routes.login.path,
        Component: LoginPage,
      },
      {
        path: routes.register.path,
        Component: RegisterPage,
      },
    ],
  },
  {
    path: '*',
    element: (
      <Navigate to={routes.login.path} replace />
    ),
  },
]);
