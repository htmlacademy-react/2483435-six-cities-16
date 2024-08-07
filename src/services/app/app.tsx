import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/store';
import Cities from '../../pages/cities/cities';
import Favorites from '../../pages/favorites/favorites';
import SignIn from '../../pages/sign-in/sign-in';
import { userSelectors } from '../../store/slices/user-slice';
import { PublicRoute, PrivateRoute } from '../private-route/private-route';
import Offer from '../../pages/offer/offer';
import { Error } from '../../components/main/error/error';
import ShowLoading from '../../components/main/show-loading';
import { activeSelectors } from '../../store/slices/active-slice';

export function App() {


  const authStatus = useAppSelector(userSelectors.status);
  const isLoading = useAppSelector(activeSelectors.isLoading);

  if (authStatus === AuthStatus.Unknown || isLoading) {
    return (
      <ShowLoading />
    );
  }


  const router = createBrowserRouter([
    {
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Cities />,
        },

        {
          element: <PublicRoute authStatus={authStatus as AuthStatus} />,
          children: [
            {
              path: AppRoute.Login,
              element: <SignIn />,
            },
          ],
        },

        {
          element: <PrivateRoute authStatus={authStatus as AuthStatus} />,
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
