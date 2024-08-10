import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { CityName } from '../../types/offer-type';
import { ActiveSlice } from '../../types/store-types/slices-types';
import type { SortType } from '../../types/sort-type';

const activeState: ActiveSlice = {
  city: 'Paris',
  activeOfferId: '',
  sortOption: 'Popular',
  isLoading: false,
};

const activeSlice = createSlice({
  name: 'active',
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
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  selectors: {
    city: (state) => state.city,
    activeOfferId: (state) => state.activeOfferId,
    sortOption: (state) => state.sortOption,
    isLoading: (state) => state.isLoading,
  },
});

const activeSelectors = activeSlice.selectors;
const { setCity, setActiveOfferId, setSortOption, setIsLoading } =
  activeSlice.actions;
const activeActions = activeSlice.actions;

export {
  activeSlice,
  activeSelectors,
  setCity,
  setActiveOfferId,
  setSortOption,
  setIsLoading,
  activeActions,
};
