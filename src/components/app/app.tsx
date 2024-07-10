
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProps } from '../../types/app-props-type';
import { AppRoute } from '../../const';
import HomePage from '../../pages/home-page/home-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import Error404 from '../../pages/error-404-page/error-404-page';


function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<HomePage offersCount={offersCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage />}
        />
        <Route
          path="*"
          element={<Error404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
