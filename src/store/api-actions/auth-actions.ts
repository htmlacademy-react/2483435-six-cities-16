import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthStatus } from '../../const';
import { dropToken, saveToken } from '../../services/token';
import { AppDispatch, RootState } from '../../types/store-types/store-type';
import { AuthData, User } from '../../types/user-type';
import { userActions } from '../slices/user-slice';

const appCreateAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>();

const checkAuthAction = appCreateAsyncThunk<void, undefined>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const resp = await api.get<User>(APIRoute.Login);
      dispatch(userActions.setStatus(AuthStatus.Auth));
      dispatch(userActions.setUserEmail(resp.data.email));
    } catch {
      dispatch(userActions.setStatus(AuthStatus.NoAuth));
    }
  }
);

const loginAction = appCreateAsyncThunk<void, AuthData>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<User>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(userActions.setStatus(AuthStatus.Auth));
    dispatch(userActions.setUserEmail(email));
  }
);

const logoutAction = appCreateAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(userActions.setStatus(AuthStatus.NoAuth));
  }
);

export { checkAuthAction, logoutAction, loginAction, appCreateAsyncThunk };
