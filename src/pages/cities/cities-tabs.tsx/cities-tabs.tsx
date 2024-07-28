import clsx from 'clsx';
import { CITIES_NAMES } from '../../../mock/const-mock';
import { Link } from 'react-router-dom';

function CitiesTabs() {
  const isCurrent = (city:string) => clsx('locations__item-link', 'tabs__item', {
    'tabs__item--active': (city === 'Paris')});


  return (
    <ul className="locations__list tabs__list">
      {CITIES_NAMES.map((city) => (
        <li key={city} className="locations__item">
          <Link className={isCurrent(city)} to="#">
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { CitiesTabs as LocationsTabs };
