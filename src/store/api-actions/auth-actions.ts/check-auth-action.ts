import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { AppDispatch, RootState } from '../../../types/store-types/store-type';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthStatus } from '../../../const';
import { userActions } from '../../slices/user-slice';
import { dispatch } from '../../store';

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(userActions.setStatus(AuthStatus.Auth));
  } catch {
    dispatch(userActions.setStatus(AuthStatus.NoAuth));
  }
});
