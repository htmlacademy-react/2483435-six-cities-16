import { configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers-slice/offers-slice';
import { activeSlice } from './slices/active-slice';
import { userSlice } from './slices/user-slice';

const store = configureStore({
  reducer: {
    [offersSlice.name]: offersSlice.reducer,
    [activeSlice.name]: activeSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});

const dispatch = store.dispatch;

export { store, dispatch };
