import { configureStore } from '@reduxjs/toolkit';
import interplaySlice from './slices/interplay-slice';
import offersSlice from './slices/offers-slice';
import userSlice from './slices/user-slice';


const store = configureStore({
  reducer: {
    [offersSlice.name]: offersSlice.reducer,
    [interplaySlice.name]: interplaySlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});

const dispatch = store.dispatch;

export { dispatch, store };

