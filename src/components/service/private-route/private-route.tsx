import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../../const';

type PrivateRouteProps = {
  authStatus: AuthStatus;
};

const getRoute = (status: AuthStatus, redirection: AppRoute) =>
  function AccessRoute({ authStatus }: PrivateRouteProps) {
    switch (authStatus) {
      case status:
        return <Outlet />;
      case 'UNKNOWN':
        return 'Loading...';
      default:
        return <Navigate to={redirection} />;
    }
  };

const PrivateRoute = getRoute('AUTH', AppRoute.Login);
const PublicRoute = getRoute('NO_AUTH', AppRoute.Main);

export { PrivateRoute, PublicRoute };
