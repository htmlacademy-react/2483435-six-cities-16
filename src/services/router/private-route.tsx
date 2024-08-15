import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { userSelectors } from '../../store/slices/user-slice';
import { useAppSelector } from '../../hooks/store';

const getRoute = (status: AuthStatus, redirection: AppRoute) =>
  function AccessRoute() {
    const authStatus = useAppSelector(userSelectors.authStatus);
    switch (authStatus) {
      case status:
        return <Outlet />;
      case AuthStatus.Unknown:
        return 'Loading...';
      default:
        return <Navigate to={redirection} />;
    }
  };

const PrivateRoute = getRoute(AuthStatus.Auth, AppRoute.Login);
const PublicRoute = getRoute(AuthStatus.NoAuth, AppRoute.Main);

export { PrivateRoute, PublicRoute };
