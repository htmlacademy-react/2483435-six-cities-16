import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../../const';
import Cities from '../../pages/cities/cities';
import Favorites from '../../pages/favorites/favorites';
import SignIn from '../../pages/sign-in/sign-in';
import { PublicRoute, PrivateRoute } from './private-route/private-route';
import { Error } from '../../components/main/error/error';
import Offer from '../../pages/offer/offer';

function Router() {
  const router = createBrowserRouter([
    {
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Cities />,
        },

        {
          element: <PublicRoute />,
          children: [
            {
              path: AppRoute.Login,
              element: <SignIn />,
            },
          ],
        },

        {
          element: <PrivateRoute />,
          children: [
            {
              path: AppRoute.Favorites,
              element: <Favorites />,
            },
          ],
        },

        {
          path: AppRoute.Offer,
          element: <Offer />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export { Router };
