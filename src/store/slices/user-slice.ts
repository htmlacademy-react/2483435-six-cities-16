import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserSlice } from '../../types/store-types/slices-types';
import type { AuthType } from '../../types/user-type';

const userState: UserSlice = {
  status: 'UNKNOWN',
  userEmail: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    setStatus: (state, action: PayloadAction<AuthType>) => {
      state.status = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
  },
  selectors: {
    status: (state) => state.status,
    userEmail: (state) => state.userEmail,
  },
});
const userSelectors = userSlice.selectors;
const { setStatus, setUserEmail } = userSlice.actions;
const userActions = userSlice.actions;

export { userSlice, userSelectors, setStatus, setUserEmail, userActions };
