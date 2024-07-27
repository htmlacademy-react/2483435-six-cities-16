import { AuthStatus } from '../../const';
import { Logo } from './logo';
import { Navigation } from './navigation';

export type HeaderProps = {
  authStatus: AuthStatus;
  isLogPage?: boolean;
};

function Header({ authStatus, isLogPage }: HeaderProps) {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {!isLogPage && <Navigation authStatus={authStatus}/>}
        </div>
      </div>
    </header>
  );
}

export { Header };
