import { Header } from '../../components/header/header';
import { LocationsTabs } from './cities-tabs.tsx/cities-tabs';
import CityOffers from './city-offers/city-offers';
import { AppProps } from '../../components/service/app/app';
import { useChangeTitle } from '../../hooks/title';
import { CityName } from '../../types/offer-type';
import { Empty } from './empty';

type CitiesProps = AppProps;

function Cities({ dataBase }: CitiesProps): JSX.Element {
  const { authStatus } = dataBase;
  const city: CityName = dataBase.activeCity;
  const offers = dataBase.getOffersByCity(city);
  const isEmpty = offers.length === 0;

  useChangeTitle('Home');
  return (
    <div className="page page--gray page--main">
      <Header authStatus={authStatus} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsTabs />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {isEmpty ? (
              <Empty city={city} />
            ) : (
              <CityOffers city={city} offers={offers} />
            )}
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cities;
