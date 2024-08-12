import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { userActions, userSelectors } from '../../store/slices/user-slice';
import { dispatch } from '../../store/store';
import { logoutAction } from '../../store/api-actions/auth-actions';
import { favoriteSelectors } from '../../store/slices/favorite-slice';

function IsLogged() {
  const userEmail = useAppSelector(userSelectors.userEmail);
  const favorites = useAppSelector(favoriteSelectors.favoriteOffers);
  const handleClick = () => {
    dispatch(logoutAction());
    dispatch(userActions.setUserEmail(''));
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
          <span className="header__favorite-count">{favorites.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          onClick={handleClick}
          className="header__nav-link"
          to={AppRoute.Login}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export { IsLogged };
