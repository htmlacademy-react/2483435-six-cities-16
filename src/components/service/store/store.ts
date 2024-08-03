import { configureStore } from '@reduxjs/toolkit';
import { citySlice, statusSlice } from './rent-slice';

export const store = configureStore({
  reducer: {
    status: statusSlice.reducer,
    city: citySlice.reducer,
  },
});
