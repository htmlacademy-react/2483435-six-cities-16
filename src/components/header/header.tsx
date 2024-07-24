import { AuthStatus } from '../../const';
import { Logo } from './logo';
import { Navigation } from './navigation';

export type HeaderProps = {
  authStatus: AuthStatus;
  favoritesCount?: number;
  isLogPage?: boolean;
};

function Header({ authStatus, favoritesCount, isLogPage }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {!isLogPage && (
            <Navigation
              authStatus={authStatus}
              favoritesCount={favoritesCount}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export { Header };
