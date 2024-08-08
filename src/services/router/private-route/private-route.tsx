import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { userSelectors } from '../../../store/slices/user-slice';
import { useAppSelector } from '../../../hooks/store';

const getRoute = (redirection: AppRoute) =>
  function AccessRoute() {
    const authStatus = useAppSelector(userSelectors.status);
    switch (authStatus) {
      case authStatus:
        return <Outlet />;
      case 'UNKNOWN':
        return 'Loading...';
      default:
        return <Navigate to={redirection} />;
    }
  };

const PrivateRoute = getRoute(AppRoute.Login);
const PublicRoute = getRoute(AppRoute.Main);

export { PrivateRoute, PublicRoute };
