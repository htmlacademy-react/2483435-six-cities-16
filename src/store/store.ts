import { configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers-slice/offers-slice';
import { activeSlice } from './slices/active-slice';
import { userSlice } from './slices/user-slice';
import { createAPI } from '../services/api';
import { favoritesSlice } from './slices/favorites-slice';

const api = createAPI();

const store = configureStore({
  reducer: {
    [offersSlice.name]: offersSlice.reducer,
    [activeSlice.name]: activeSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [favoritesSlice.name]: favoritesSlice.reducer,
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
