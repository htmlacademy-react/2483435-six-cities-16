import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProps } from '../../types/app-props-type';
import { AppRoute, AuthorizationStatus } from '../../const';
import { HelmetProvider } from'react-helmet-async';
import HomePage from '../../pages/home-page/home-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import Error404 from '../../pages/error-404-page/error-404-page';
import PrivateRoute from '../private-route/private-route';

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<HomePage offersCount={offersCount} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
