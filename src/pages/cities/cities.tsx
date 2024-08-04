import { Header } from '../../components/header/header';
import { CitiesTabs } from './cities-tabs.tsx/cities-tabs';
import CityOffers from './city-offers/city-offers';
import { useChangeTitle } from '../../hooks/title';
import { Empty } from './empty';
import { Map } from '../../components/map/map';
import clsx from 'clsx';
import { useAppSelector } from '../../hooks/store';
import { activeSelectors } from '../../store/slices/active-slice';
import { offersByCity} from '../../store/slices/offers-slice';
function Cities(): JSX.Element {
  const city = useAppSelector(activeSelectors.city);
  const activeOffer = useAppSelector(activeSelectors.offer);
  const filteredOffers = useAppSelector(offersByCity);
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
            <CitiesTabs />
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
