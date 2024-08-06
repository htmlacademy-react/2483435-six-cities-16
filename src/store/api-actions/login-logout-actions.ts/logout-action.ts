import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { AppDispatch, RootState } from '../../../types/store-types/store-type';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthStatus } from '../../../const';
import { dropToken } from '../../../services/token';
import { userActions } from '../../slices/user-slice';
import { dispatch } from '../../store';

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(userActions.setStatus(AuthStatus.NoAuth));
});
