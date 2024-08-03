import { Header } from '../../components/header/header';
import { LocationsTabs } from './cities-tabs.tsx/cities-tabs';
import CityOffers from './city-offers/city-offers';
import { useChangeTitle } from '../../hooks/title';
import { Empty } from './empty';
import { Map } from '../../components/map/map';
import clsx from 'clsx';
import { useAppSelector } from '../../hooks/store';
import { getOffersByCity } from '../../utils/utils';
function Cities(): JSX.Element {
  const city = useAppSelector((state) => state.interplay.selectCity);
  const offers = useAppSelector((state) => state.offers.offers);
  const activeOffer = useAppSelector((state) => state.interplay.activeOffer);
  const filteredOffers = getOffersByCity(city, offers);
  const isEmpty = filteredOffers.length === 0;
  const isEmptyMainClasses = clsx('page__main', 'page__main--index', {
    'page__main--index-empty': isEmpty,
  });
  const isEmptyCitiesClasses = clsx('cities__places-container', 'container', {
    'cities__places-container--empty': isEmpty,
  });

  useChangeTitle('Home');

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={isEmptyMainClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsTabs />
          </section>
        </div>
        <div className="cities">
          <div className={isEmptyCitiesClasses}>
            {isEmpty ? (
              <Empty />
            ) : (
              <>
                <CityOffers />
                <div className="cities__right-section">
                  <Map
                    className="cities"
                    activeCity={city}
                    offers={filteredOffers}
                    activeOffer={activeOffer}
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
