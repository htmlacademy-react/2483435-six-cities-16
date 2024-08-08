import { AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/slices/user-slice';
import ShowLoading from '../../components/main/show-loading';
import { activeSelectors } from '../../store/slices/active-slice';
import { Router } from '../router/router';

function App() {
  const authStatus = useAppSelector(userSelectors.status);
  const isLoading = useAppSelector(activeSelectors.isLoading);

  if (authStatus === AuthStatus.Unknown || isLoading) {
    return <ShowLoading />;
  }

  return <Router />;

}

export { App };
