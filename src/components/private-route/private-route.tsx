import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { ReactNode } from 'react';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: ReactNode;
};

const getRoute = (status: AuthStatus, redirection: AppRoute) =>
  function AccessRoute({ authStatus, children }: PrivateRouteProps) {
    switch (authStatus) {
      case status:
        return children;
      case 'UNKNOWN':
        return 'Loading...';
      default:
        return <Navigate to={redirection} />;
    }
  };

const PrivateRoute = getRoute('AUTH', AppRoute.Login);
const PublicRoute = getRoute('NO_AUTH', AppRoute.Main);

export { PrivateRoute, PublicRoute };
