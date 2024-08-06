import { PayloadAction, createSlice } from '@reduxjs/toolkit/react';
import { ErrorType } from '../../types/error-type';

const errorState: ErrorType = {
  error: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState: errorState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  selectors: {
    error: (state) => state.error,
  },
});
const errorSelectors = errorSlice.selectors;
const { setError } = errorSlice.actions;
const errorActions = errorSlice.actions;

export { errorSlice, errorSelectors, setError, errorActions };
