import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/slices/user-slice';
import { dispatch } from '../../store/store';
import { logoutAction } from '../../store/api-actions/auth-actions';
import { FavoriteCount } from './favorite-count';
import { fetchFavoritesAction } from '../../store/api-actions/favorites-actions';
import { useMemo } from 'react';

function IsLogged() {
  const auth = useAppSelector(userSelectors.authStatus);

  useMemo(() => {
    if (auth) {
      dispatch(fetchFavoritesAction());
    }
  }, [auth]);

  const userEmail = useAppSelector(userSelectors.userEmail);

  const handleClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{userEmail}</span>
          <FavoriteCount />
        </Link>
      </li>
      <li className="header__nav-item">
        <a onClick={handleClick} className="header__nav-link" href="#2222">
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </ul>
  );
}

export { IsLogged };
