import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { userSelectors } from '../../store/slices/user-slice';
import { useAppSelector } from '../../hooks/store';
import { ShowLoading } from '../../components/main/show-loading';

const getRoute = (status: AuthStatus, redirection: AppRoute) =>
  function AccessRoute() {
    const authStatus = useAppSelector(userSelectors.authStatus);
    switch (authStatus) {
      case status:
        return <Outlet />;
      case AuthStatus.Unknown:
        return <ShowLoading />;
      default:
        return <Navigate to={redirection} />;
    }
  };

const PrivateRoute = getRoute(AuthStatus.Auth, AppRoute.Login);
const PublicRoute = getRoute(AuthStatus.NoAuth, AppRoute.Main);

export { PrivateRoute, PublicRoute };
