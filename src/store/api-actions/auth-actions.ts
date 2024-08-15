import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { dropToken, saveToken } from '../../services/token';
import { AppDispatch, RootState } from '../../types/store-types/store-type';
import { AuthData, User } from '../../types/user-type';

const appCreateAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>();

const checkAuthAction = appCreateAsyncThunk<string, undefined>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const {
      data: { email },
    } = await api.get<User>(APIRoute.Login);
    return email;
  }
);

const loginAction = appCreateAsyncThunk<{ email: string }, AuthData>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const {
      data: { token },
    } = await api.post<User>(APIRoute.Login, { email, password });
    saveToken(token);
    return { email };
  }
);

const logoutAction = appCreateAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export { checkAuthAction, logoutAction, loginAction, appCreateAsyncThunk };
