import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { CityName } from '../../types/offer-type';
import { ActiveSlice } from '../../types/store-types/slices-types';
import type { SortType } from '../../types/sort-type';
import { SliceName } from '../../const';

const activeState: ActiveSlice = {
  city: 'Paris',
  activeOfferId: '',
  sortOption: 'Popular',
};

const activeSlice = createSlice({
  name: SliceName.Active,
  initialState: activeState,
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    setActiveOfferId: (state, action: PayloadAction<string>) => {
      state.activeOfferId = action.payload;
    },
    setSortOption: (state, action: PayloadAction<SortType>) => {
      state.sortOption = action.payload;
    },
  },
  selectors: {
    city: (state) => state.city,
    activeOfferId: (state) => state.activeOfferId,
    sortOption: (state) => state.sortOption,
  },
});

const activeSelectors = activeSlice.selectors;
const { setCity, setActiveOfferId, setSortOption } = activeSlice.actions;
const activeActions = activeSlice.actions;

export {
  activeSlice,
  activeSelectors,
  setCity,
  setActiveOfferId,
  setSortOption,
  activeActions,
};
