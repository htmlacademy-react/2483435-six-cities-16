import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../types/store-types/store-type';
import { AuthStatus } from '../const';
import { getToken } from '../services/token';
import { checkAuthAction } from './api-actions/auth-actions';
import { userActions } from './slices/user-slice';
import { store } from './store';

const appCreateAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>();

const checkToken = () =>
  getToken()
    ? store.dispatch(checkAuthAction())
    : store.dispatch(userActions.setStatus(AuthStatus.NoAuth));

export { appCreateAsyncThunk, checkToken };
