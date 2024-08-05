import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityName, FullOffer } from '../../types/offer-type';
import { ActiveSlice } from '../../types/store-types/slices-types';
import { SortType } from '../../const';

const activeState: ActiveSlice = {
  city: 'Paris',
  activeOffer: null,
  sortOption: 'PriceHighToLow'
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
    setSortOption: (state, action: PayloadAction<SortType>) => {
      state.sortOption = action.payload;
    },
  },
  selectors: {
    city: (state) => state.city,
    activeOffer: (state) => state.activeOffer,
    sortOption: (state) => state.sortOption,
  },
});

const activeSelectors = activeSlice.selectors;
const { setCity, setActiveOffer, setSortOption } = activeSlice.actions;
const activeActions = activeSlice.actions;

export { activeSlice, activeSelectors, setCity, setActiveOffer, setSortOption, activeActions };
