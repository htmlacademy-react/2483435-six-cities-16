import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { favoritesOffers } from '../../store/slices/offers-slice/offers-selectors';

function IsLogged() {
  const favorites = useAppSelector(favoritesOffers);
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">
            {'email'}
          </span>
          <span className="header__favorite-count">{favorites.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.Login}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export { IsLogged };
