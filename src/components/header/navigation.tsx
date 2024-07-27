import { Link } from 'react-router-dom';
import { HeaderProps } from './header';
import { IsLogged } from './isLogged';
import { AppRoute } from '../../const';
import { dataBase } from '../..';

type NavigationProps = HeaderProps;

function Navigation({ authStatus}: NavigationProps) {
  const isAuth = authStatus === 'AUTH';
  const favoritesCount = dataBase.getFavoritesOffers();

  return (
    <nav className="header__nav">
      {isAuth ? (
        <IsLogged favoritesCount={favoritesCount} />
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
