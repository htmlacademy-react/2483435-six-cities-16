import clsx from 'clsx';
import { CITIES_NAMES } from '../../../mock/const-mock';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppSelector } from '../../../components/service/store/hocks';
import { handleChangeCity } from '../../../components/service/store/rent-slice';
import { dispatch } from '../../../components/service/store/store';


function CitiesTabs() {
  const currentCity = useAppSelector((state)=>state.rentSlice.city);

  const isCurrent = (city: string) =>
    clsx('locations__item-link', 'tabs__item', {
      'tabs__item--active': city === currentCity,
    });


  return (
    <ul className="locations__list tabs__list">
      {CITIES_NAMES.map((city) => (
        <li key={city} className="locations__item" >
          <Link className={isCurrent(city)} to={AppRoute.Main} onClick={()=>dispatch(handleChangeCity(city))}>
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { CitiesTabs as LocationsTabs };
