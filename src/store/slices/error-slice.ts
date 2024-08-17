import { PayloadAction, createSlice } from '@reduxjs/toolkit/react';
import type { ErrorType } from '../../types/error-type';
import { ErrorMessage, SliceName } from '../../const';
import {
  fetchOfferAction,
  fetchOffersAction,
  fetchOffersNearbyAction,
} from '../api-actions/offers-actions';
import { fetchGetCommentsAction } from '../api-actions/comments-actions';
import {
  fetchChangeFavoriteAction,
  fetchFavoritesAction,
} from '../api-actions/favorites-actions';
import {
  checkAuthAction,
  loginAction,
  logoutAction,
} from '../api-actions/auth-actions';

const errorState: ErrorType = {
  notFound: false,
  loadError: {},
};

const errorSlice = createSlice({
  name: SliceName.Error,
  initialState: errorState,
  reducers: {
    setError: (state, action: PayloadAction<boolean>) => {
      state.notFound = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.rejected, (state) => {
        state.loadError['FetchOffersAction'] = ErrorMessage.FetchOffersAction;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.loadError.FetchOffersAction = ErrorMessage.FetchOfferAction;
      })
      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.loadError.FetchOffersNearbyAction =
          ErrorMessage.FetchOffersNearbyAction;
      })
      .addCase(fetchGetCommentsAction.rejected, (state) => {
        state.loadError.FetchGetCommentsAction =
          ErrorMessage.FetchGetCommentsAction;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.loadError.FetchFavoritesAction =
          ErrorMessage.FetchFavoritesAction;
      })
      .addCase(fetchChangeFavoriteAction.rejected, (state) => {
        state.loadError.FetchChangeFavoriteAction =
          ErrorMessage.FetchChangeFavoriteAction;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.loadError.CheckAuthAction = ErrorMessage.CheckAuthAction;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loadError.LoginAction = ErrorMessage.LoginAction;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.loadError.LogoutAction = ErrorMessage.LogoutAction;
      })
      .addCase(loginAction.fulfilled, (state) => {
        delete state.loadError.LoginAction;
      })
      .addCase(fetchChangeFavoriteAction.fulfilled, (state) => {
        delete state.loadError.fetchFavoritesAction;
      });
  },
  selectors: {
    notFound: (state) => state.notFound,
    loadError: (state) => state.loadError,
  },
});
const errorSelectors = errorSlice.selectors;
const { setError } = errorSlice.actions;
const errorActions = errorSlice.actions;

export { errorSlice, errorSelectors, setError, errorActions };
