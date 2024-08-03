import { configureStore } from '@reduxjs/toolkit';
import rentSlice from './rent-slice';

export const store = configureStore({
  reducer: {
    rentSlice: rentSlice },
});

export const dispatch = store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
