import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { errorActions } from '../slices/error-slice';
import { Setting } from '../../const';

const clearErrorAction = createAsyncThunk('six-cities/clearError', () => {
  setTimeout(() => errorActions.setError(false), Setting.TimeoutError);
});

export { clearErrorAction };
