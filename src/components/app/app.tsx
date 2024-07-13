import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { AppProps } from '../../types/app-props-type';
import { PrivateRoute, PublicRoute } from '../private-route/private-route';
import HomePage from '../../pages/home-page/home-page';
import ErrorPage from '../../pages/error-page/error-page';

export function App({ offersCount }: AppProps) {
  const currentStatus = 'NO_AUTH';

  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage offersCount={offersCount} />,
        },

        {
          element: <PublicRoute currentStatus={currentStatus} />,
          children: [
            {
              path: AppRoute.Login,
              element: <LoginPage />,
            },
          ],
        },

        {
          element: <PrivateRoute currentStatus={currentStatus} />,
          children: [
            {
              path: AppRoute.Favorites,
              element: <FavoritesPage />,
            },
          ],
        },

        {
          path: AppRoute.Offer,
          element: <OfferPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
