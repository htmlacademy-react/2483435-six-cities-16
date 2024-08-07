import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../../../types/store-types/store-type';
import { AuthData, User } from '../../../types/user-type';
import { APIRoute, AuthStatus } from '../../../const';
import { userActions } from '../../slices/user-slice';
import { saveToken } from '../../../services/token';
import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { dispatch } from '../../store';

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { extra: api }) => {
  const {
    data: { token },
  } = await api.post<User>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(userActions.setStatus(AuthStatus.Auth));
});
