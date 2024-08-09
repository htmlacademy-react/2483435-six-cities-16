import { APIRoute, AuthStatus } from '../../../const';
import { User } from '../../../types/user-type';
import { userActions } from '../../slices/user-slice';
import { dispatch } from '../../store';
import { appCreateAsyncThunk } from '../../utils';

export const checkAuthAction = appCreateAsyncThunk<void, undefined>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    try {
      const resp = await api.get<User>(APIRoute.Login);
      dispatch(userActions.setStatus(AuthStatus.Auth));
      dispatch(userActions.setUserEmail(resp.data.email));
    } catch {
      dispatch(userActions.setStatus(AuthStatus.NoAuth));
    }
  }
);
