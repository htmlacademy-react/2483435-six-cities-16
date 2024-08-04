import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from '../../../pages/sign-in/sign-in';
import { PrivateRoute, PublicRoute } from '../private-route/private-route';
import Cities from '../../../pages/cities/cities';
import { AppRoute } from '../../../const';
import Error from '../../../pages/cities/error/error';
import Favorites from '../../../pages/favorites/favorites';
import Offer from '../../../pages/offer/offer';
import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/store';
import { loadData } from '../../../store/slices/offers-slice';
import { dispatch } from '../../../store/store';
import { userSelectors } from '../../../store/slices/user-slice';

export function App() {
  useEffect(() => {
    dispatch(loadData());
  }, []);
  const authStatus = useAppSelector(userSelectors.status);

  const router = createBrowserRouter([
    {
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Cities />,
        },

        {
          element: <PublicRoute authStatus={authStatus} />,
          children: [
            {
              path: AppRoute.Login,
              element: <SignIn />,
            },
          ],
        },

        {
          element: <PrivateRoute authStatus={authStatus} />,
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
