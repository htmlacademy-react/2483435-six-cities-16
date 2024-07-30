import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from '../../../pages/sign-in/sign-in';
import { PrivateRoute, PublicRoute } from '../private-route/private-route';
import Cities from '../../../pages/cities/cities';
import { AppRoute } from '../../../const';
import Error from '../../../pages/cities/error/error';
import { DataBase } from '../data-base';
import Favorites from '../../../pages/favorites/favorites';
import Offer from '../../../pages/offer/offer';

export type AppProps = {
  dataBase: DataBase;
};

export function App({ dataBase }: AppProps) {
  const currentStatus = dataBase.authStatus;
  const router = createBrowserRouter([
    {
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Cities dataBase={dataBase} />,
        },

        {
          element: <PublicRoute authStatus={currentStatus} />,
          children: [
            {
              path: AppRoute.Login,
              element: <SignIn authStatus={currentStatus} />,
            },
          ],
        },

        {
          element: <PrivateRoute authStatus={currentStatus} />,
          children: [
            {
              path: AppRoute.Favorites,
              element: <Favorites dataBase={dataBase} />,
            },
          ],
        },

        {
          path: AppRoute.Offer,
          element: <Offer dataBase={dataBase} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
