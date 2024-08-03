import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from '../../../pages/sign-in/sign-in';
import { PrivateRoute, PublicRoute } from '../private-route/private-route';
import Cities from '../../../pages/cities/cities';
import { AppRoute } from '../../../const';
import Error from '../../../pages/cities/error/error';
import Favorites from '../../../pages/favorites/favorites';
import Offer from '../../../pages/offer/offer';
import { useEffect } from 'react';
import { loadComments, loadOffers } from '../store/rent-slice';
import { dispatch, store } from '../store/store';
import { useAppSelector } from '../store/hocks';

export function App() {
  useEffect(() => {
    dispatch(loadOffers());
    //ВОПРОС store state
    dispatch(loadComments(store.getState().rentSlice.offers));
  },[]
  );

  const authStatus = useAppSelector((state)=>state.rentSlice.status);
  const router = createBrowserRouter([
    {
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Cities/>,
        },

        {
          element: <PublicRoute authStatus={authStatus} />,
          children: [
            {
              path: AppRoute.Login,
              element: <SignIn/>,
            },
          ],
        },

        {
          element: <PrivateRoute authStatus={authStatus}/>,
          children: [
            {
              path: AppRoute.Favorites,
              element: <Favorites/>,
            },
          ],
        },

        {
          path: AppRoute.Offer,
          element: <Offer/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
