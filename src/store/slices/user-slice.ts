import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserSlice } from '../../types/store-types/slices-types';
import { AuthType } from '../../types/user-type';

const userState: UserSlice = {
  status: 'UNKNOWN',
};

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    setStatus: (state, action: PayloadAction<AuthType>) => {
      state.status = action.payload;
    },
  },
  selectors: {
    status: (state) => state.status,
  },
});
const userSelectors = userSlice.selectors;
const { setStatus } = userSlice.actions;
const userActions = userSlice.actions;

export { userSlice, userSelectors, setStatus, userActions };
