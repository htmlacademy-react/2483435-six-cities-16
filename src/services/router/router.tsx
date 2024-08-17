import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Cities } from '../../pages/cities/cities';
import { Favorites } from '../../pages/favorites/favorites';
import { SignIn } from '../../pages/sign-in/sign-in';
import { PublicRoute, PrivateRoute } from './private-route';
import { Offer } from '../../pages/offer/offer';
import { NotFound } from '../../components/main/errors/not-found/not-found';

function Router() {
  const router = createBrowserRouter([
    {
      errorElement: <NotFound />,
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
