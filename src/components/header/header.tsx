import { Logo } from './logo';
import { Navigation } from './navigation';

export type HeaderProps = {
  isLogPage?: boolean;
};

function Header({ isLogPage }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {!isLogPage && <Navigation />}
        </div>
      </div>
    </header>
  );
}

export { Header };
