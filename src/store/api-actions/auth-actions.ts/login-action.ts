import { AuthData, User } from '../../../types/user-type';
import { APIRoute, AuthStatus } from '../../../const';
import { userActions } from '../../slices/user-slice';
import { saveToken } from '../../../services/token';
import { dispatch } from '../../store';
import { appCreateAsyncThunk } from '../../utils';

export const loginAction = appCreateAsyncThunk<void, AuthData>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const {
      data: { token },
    } = await api.post<User>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(userActions.setStatus(AuthStatus.Auth));
    dispatch(userActions.setUserEmail(email));
  }
);
