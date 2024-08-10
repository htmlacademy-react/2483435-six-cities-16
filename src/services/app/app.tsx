import { AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/slices/user-slice';
import { activeSelectors } from '../../store/slices/active-slice';
import { Router } from '../router/router';
import { ShowLoading } from '../../components/main/show-loading';

function App() {
  const authStatus = useAppSelector(userSelectors.status);
  const isLoading = useAppSelector(activeSelectors.isLoading);

  if (authStatus === AuthStatus.Unknown || isLoading) {
    return <ShowLoading />;
  }

  return <Router />;
}

export { App };
