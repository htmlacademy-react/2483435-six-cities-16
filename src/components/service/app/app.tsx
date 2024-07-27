import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FavoritesPage from '../../../pages/favorites-page/favorites-page';
import LoginPage from '../../../pages/login-page/login-page';
import OfferPage from '../../../pages/offer-page/offer-page';
import { PrivateRoute, PublicRoute } from '../private-route/private-route';
import HomePage from '../../../pages/home-page/home-page';
import { AppRoute } from '../../../const';
// import ErrorPage from '../../../pages/error-page/error-page';

export function App() {
  const currentStatus = 'AUTH';
  const router = createBrowserRouter([
    {
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage authStatus={currentStatus} />,
        },

        {
          element: <PublicRoute authStatus={currentStatus} />,
          children: [
            {
              path: AppRoute.Login,
              element: <LoginPage authStatus={currentStatus} />,
            },
          ],
        },

        {
          element: <PrivateRoute authStatus={currentStatus} />,
          children: [
            {
              path: AppRoute.Favorites,
              element: <FavoritesPage authStatus={currentStatus} />,
            },
          ],
        },

        {
          path: AppRoute.Offer,
          element: <OfferPage authStatus={currentStatus} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
