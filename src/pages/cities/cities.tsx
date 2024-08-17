import { Header } from '../../components/header/header';
import { CitiesTabs } from './cities-tabs';
import { useChangeTitle } from '../../hooks/title';
import clsx from 'clsx';
import { useAppSelector } from '../../hooks/store';
import { offersByCity } from '../../store/slices/offers-slice/offers-selectors';
import { fetchOffersAction } from '../../store/api-actions/offers-actions';
import { store } from '../../store/store';
import { CityContainer } from './city-container';

store.dispatch(fetchOffersAction());

function Cities(): JSX.Element {
  const cityOffers = useAppSelector(offersByCity);
  const isEmpty = cityOffers.length === 0;
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
            <CityContainer isEmpty={isEmpty} cityOffers={cityOffers} />
          </div>
        </div>
      </main>
    </div>
  );
}

export { Cities };
