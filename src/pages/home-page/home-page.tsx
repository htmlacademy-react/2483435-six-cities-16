import { Header } from '../../components/header/header';
import { LocationsTabs } from '../../components/main/locations-tabs.tsx/locations-tabs';
import OffersList from '../../components/main/offers-list/offers-list';
import { useChangeTitle } from '../../hooks/title';
import { AppProps } from '../../types/app-props-type';
import { FavoritesPageProps } from '../favorites-page/favorites-page';

export type HomePageProps = AppProps & FavoritesPageProps;

function HomePage({
  authStatus,
  offers,
  offersCount,
  favoritesOffers,
}: HomePageProps): JSX.Element {
  const favoritesCount = favoritesOffers.length;
  useChangeTitle('Home');
  return (
    <div className="page page--gray page--main">
      <Header authStatus={authStatus} favoritesCount={favoritesCount} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsTabs />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCount} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OffersList offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
