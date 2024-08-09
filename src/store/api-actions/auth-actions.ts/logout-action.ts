import { APIRoute, AuthStatus } from '../../../const';
import { dropToken } from '../../../services/token';
import { userActions } from '../../slices/user-slice';
import { dispatch } from '../../store';
import { appCreateAsyncThunk } from '../../utils';

export const logoutAction = appCreateAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(userActions.setStatus(AuthStatus.NoAuth));
  }
);
