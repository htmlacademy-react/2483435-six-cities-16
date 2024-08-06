import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import { AUTH_STATUS, AuthStatus } from '../../const';
import { UserSlice } from '../../types/store-types/slices-types';

const userState: UserSlice = {
  status: faker.helpers.arrayElement(AUTH_STATUS) as AuthStatus,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    setStatus: (state, action: PayloadAction<AuthStatus>) => {
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
