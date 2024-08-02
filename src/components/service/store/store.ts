import { configureStore } from '@reduxjs/toolkit';
import { citySlice, statusSlice } from './state';

export const store = configureStore({
  reducer: {
    status:statusSlice.reducer,
    city: citySlice.reducer
  },
});
