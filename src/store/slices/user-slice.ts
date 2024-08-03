import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import { AUTH_STATUS, AuthStatus } from '../../const';
import { UserSlice } from '../../types/store-types/slices-types';


const userState: UserSlice = {
  status: faker.helpers.arrayElement(AUTH_STATUS) as AuthStatus,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    setStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = userSlice.actions;

export default userSlice;
