import clsx from 'clsx';
import { CITIES_NAMES } from '../../../mock/const-mock';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppSelector } from '../../../hooks/store';
import { dispatch } from '../../../store/store';
import { handleChangeCity } from '../../../store/slices/interplay-slice';

function CitiesTabs() {
  const currentCity = useAppSelector((state) => state.interplay.selectCity);

  const isCurrent = (city: string) =>
    clsx('locations__item-link', 'tabs__item', {
      'tabs__item--active': city === currentCity,
    });

  return (
    <ul className="locations__list tabs__list">
      {CITIES_NAMES.map((city) => (
        <li key={city} className="locations__item">
          <Link
            className={isCurrent(city)}
            to={AppRoute.Main}
            onClick={() => dispatch(handleChangeCity(city))}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { CitiesTabs as LocationsTabs };
