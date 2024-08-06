import clsx from 'clsx';
import { CITIES_NAMES } from '../../../mock/const-mock';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useActionCreators, useAppSelector } from '../../../hooks/store';
import {
  activeActions,
  activeSelectors,
} from '../../../store/slices/active-slice';
import { CityName } from '../../../types/offer-type';

function CitiesTabs() {
  const city = useAppSelector(activeSelectors.city);
  const { setCity } = useActionCreators(activeActions);

  const handleChangeCity = (cityName: CityName) => {
    setCity(cityName);
  };

  const isCurrent = (cityName: string) =>
    clsx('locations__item-link', 'tabs__item', {
      'tabs__item--active': cityName === city,
    });

  return (
    <ul className="locations__list tabs__list">
      {CITIES_NAMES.map((cityName) => (
        <li key={cityName} className="locations__item">
          <Link
            className={isCurrent(cityName)}
            to={AppRoute.Main}
            onClick={() => handleChangeCity(cityName)}
          >
            <span>{cityName}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { CitiesTabs };
