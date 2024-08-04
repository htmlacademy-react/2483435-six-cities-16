import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityName, FullOffer } from '../../types/offer-type';
import { ActiveSlice } from '../../types/store-types/slices-types';

const activeState: ActiveSlice = {
  city: 'Paris',
  activeOffer: null,
};

const activeSlice = createSlice({
  name: 'active',
  initialState: activeState,
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    setActiveOffer: (state, action: PayloadAction<FullOffer | null>) => {
      state.activeOffer = action.payload;
    },
  },
  selectors: {
    city: (state) => state.city,
    activeOffer: (state) => state.activeOffer,
  },
});

const activeSelectors = activeSlice.selectors;
const { setCity, setActiveOffer } = activeSlice.actions;
const activeActions = activeSlice.actions;

export { activeSlice, activeSelectors, setCity, setActiveOffer, activeActions };
