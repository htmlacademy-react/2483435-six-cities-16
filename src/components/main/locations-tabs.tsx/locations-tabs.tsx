import { CITIES_NAMES } from '../../../mock/const-mock';
import { Link } from 'react-router-dom';

function LocationsTabs() {
  return (
    <ul className="locations__list tabs__list">
      {CITIES_NAMES.map((city) => (
        <li key={city} className="locations__item">
          <Link className="locations__item-link tabs__item" to="#">
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { LocationsTabs };
