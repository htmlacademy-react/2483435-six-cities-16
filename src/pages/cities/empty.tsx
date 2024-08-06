import { useAppSelector } from '../../hooks/store';
import { activeSelectors } from '../../store/slices/active-slice';

export function Empty() {
  const city = useAppSelector(activeSelectors.city);
  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in {city}
          </p>
        </div>
      </section>
      <div className="cities__right-section" />
    </>
  );
}
