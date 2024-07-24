import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../../const';
import FavoritesPage from '../../../pages/favorites-page/favorites-page';
import LoginPage from '../../../pages/login-page/login-page';
import OfferPage from '../../../pages/offer-page/offer-page';
import { AppProps } from '../../../types/app-props-type';
import { PrivateRoute, PublicRoute } from '../private-route/private-route';
import HomePage from '../../../pages/home-page/home-page';
import ErrorPage from '../../../pages/error-page/error-page';

export function App({ offers, offersCount }: AppProps) {
  const currentStatus = 'AUTH';
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <HomePage
              authStatus={currentStatus}
              offers={offers}
              offersCount={offersCount}
              favoritesOffers={favoritesOffers}
            />
          ),
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
              element: (
                <FavoritesPage
                  authStatus={currentStatus}
                  favoritesOffers={favoritesOffers}
                />
              ),
            },
          ],
        },

        {
          path: AppRoute.Offer,
          element: (
            <OfferPage
              favoritesOffers={favoritesOffers}
              authStatus={currentStatus}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
