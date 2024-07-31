import clsx from 'clsx';
import { CITIES_NAMES } from '../../../mock/const-mock';
import { Link } from 'react-router-dom';
import { CityName } from '../../../types/offer-type';
import { AppRoute } from '../../../const';

type CitiesTabsProps = {
  activeCity: CityName;
  onCityChange: (city: string) => void;
};

function CitiesTabs({ activeCity, onCityChange }: CitiesTabsProps) {
  const isCurrent = (city: string) =>
    clsx('locations__item-link', 'tabs__item', {
      'tabs__item--active': city === activeCity,
    });


  return (
    <ul className="locations__list tabs__list">
      {CITIES_NAMES.map((city) => (
        <li key={city} className="locations__item" >
          <Link className={isCurrent(city)} to={AppRoute.Main} onClick={()=>onCityChange(city)}>
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { CitiesTabs as LocationsTabs };
