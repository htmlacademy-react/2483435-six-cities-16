import { configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers-slice/offers-slice';
import { activeSlice } from './slices/active-slice';
import { userSlice } from './slices/user-slice';
import { createAPI } from '../services/api';

const api = createAPI();

const store = configureStore({
  reducer: {
    [offersSlice.name]: offersSlice.reducer,
    [activeSlice.name]: activeSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

const dispatch = store.dispatch;

export { api, store, dispatch };
