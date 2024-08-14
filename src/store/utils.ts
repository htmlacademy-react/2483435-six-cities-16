import { AuthStatus } from '../const';
import { getToken } from '../services/token';
import { checkAuthAction } from './api-actions/auth-actions';
import { userActions } from './slices/user-slice';
import { store } from './store';

const checkToken = () =>
  getToken()
    ? store.dispatch(checkAuthAction())
    : store.dispatch(userActions.setStatus(AuthStatus.NoAuth));

export {checkToken };
