import { createSlice } from '@reduxjs/toolkit';
import { CityName } from '../../../types/offer-type';


const cityState = { city: 'Paris'};
const statusState = { status: 'AUTH'};


export const citySlice = createSlice({
  name: 'city' as CityName,
  initialState: cityState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});


export const statusSlice = createSlice({
  name: 'status',
  initialState: statusState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const {setCity} = citySlice.actions;
export const {setStatus} = statusSlice.actions;
