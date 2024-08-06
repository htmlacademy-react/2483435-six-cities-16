import { Link } from 'react-router-dom';
import { IsLogged } from './isLogged';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/slices/user-slice';

function Navigation() {
  const authStatus = useAppSelector(userSelectors.status);
  const isAuth = authStatus === 'AUTH';

  return (
    <nav className="header__nav">
      {isAuth ? (
        <IsLogged />
      ) : (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export { Navigation };
