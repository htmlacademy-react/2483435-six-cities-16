import { Header } from '../../components/header/header';
import { LocationsTabs } from './cities-tabs.tsx/cities-tabs';
import CityOffers from './city-offers/city-offers';
import { AppProps } from '../../components/service/app/app';
import { useChangeTitle } from '../../hooks/title';
import { CityName, FullOffer } from '../../types/offer-type';
import { Empty } from './empty';
import { Map } from '../../components/map/map';
import { useState } from 'react';
import clsx from 'clsx';
import { store } from '../../components/service/store/store';
import { setCity } from '../../components/service/store/rent-slice';

type CitiesProps = AppProps;

function Cities({ dataBase }: CitiesProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<FullOffer | null>(null);
  const activeCity = store.getState().city.city;
  const offers = dataBase.getOffersByCity(activeCity);
  const isEmpty = offers.length === 0;
  const isEmptyMainClasses = clsx('page__main', 'page__main--index', {
    'page__main--index-empty': isEmpty,
  });
  const isEmptyCitiesClasses = clsx('cities__places-container', 'container', {
    'cities__places-container--empty': isEmpty,
  });

  const handleCityChange = (city: CityName) => {
    store.dispatch(setCity(city));
  };
  const handleOfferHover = (offer?: FullOffer) => {
    setActiveOffer(offer || null);
  };
  useChangeTitle('Home');

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={isEmptyMainClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsTabs
              activeCity={activeCity}
              onCityChange={handleCityChange}
            />
          </section>
        </div>
        <div className="cities">
          <div className={isEmptyCitiesClasses}>
            {isEmpty ? (
              <Empty city={activeCity} />
            ) : (
              <>
                <CityOffers city={activeCity} onOfferHover={handleOfferHover} />
                <div className="cities__right-section">
                  <Map
                    className="cities"
                    activeCity={activeCity}
                    activeOffer={activeOffer}
                    offers={offers}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cities;
