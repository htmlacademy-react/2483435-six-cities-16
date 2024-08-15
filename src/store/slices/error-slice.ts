import { PayloadAction, createSlice } from '@reduxjs/toolkit/react';
import type { ErrorType } from '../../types/error-type';
import { SliceName } from '../../const';

const errorState: ErrorType = {
  error: null,
};

const errorSlice = createSlice({
  name: SliceName.Error,
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
