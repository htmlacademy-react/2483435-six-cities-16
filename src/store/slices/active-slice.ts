import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityName, Offer } from '../../types/offer-type';
import { ActiveSlice } from '../../types/store-types/slices-types';
import { SortType } from '../../types/sort-type';

const activeState: ActiveSlice = {
  city: 'Paris',
  activeOfferId: '',
  activeOffer: null,
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
    setActiveOffer: (state, action: PayloadAction<Offer | null>) => {
      state.activeOffer = action.payload;
    },
    setSortOption: (state, action: PayloadAction<SortType>) => {
      state.sortOption = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  },
  selectors: {
    city: (state) => state.city,
    activeOfferId: (state) => state.activeOfferId,
    activeOffer: (state) => state.activeOffer,
    sortOption: (state) => state.sortOption as SortType,
    isLoading: (state) => state.isLoading,
  },
});

const activeSelectors = activeSlice.selectors;
const { setCity, setActiveOfferId, setActiveOffer, setSortOption, setIsLoading } = activeSlice.actions;
const activeActions = activeSlice.actions;

export { activeSlice, activeSelectors, setCity, setActiveOfferId, setActiveOffer, setSortOption, setIsLoading, activeActions };
