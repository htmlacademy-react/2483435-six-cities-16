import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityName } from '../../types/offer-type';
import { AppDispatch } from '../../types/store-types/store-type';
import { ActiveSlice } from '../../types/store-types/slices-types';

const activeState: ActiveSlice = {
  city: 'Paris',
  offerId: null,
};

const activeSlice = createSlice({
  name: 'active',
  initialState: activeState,
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    setOfferId: (state, action: PayloadAction<string | null>) => {
      state.offerId = action.payload;
    },
  },
  selectors: {
    city: (state) => state.city,
    offerId: (state) => state.offerId,
  },
});

const activeSelectors = activeSlice.selectors;
const { setCity, setOfferId } = activeSlice.actions;
const activeActions = activeSlice.actions;

// const handleActiveOffer =
//   (offerId?: string | null) => (dispatch: AppDispatch) => {
//     dispatch(setOfferId(offerId || null));
//   };

export {
  activeSlice,
  activeSelectors,
  setCity,
  setOfferId,
  activeActions,
  // handleActiveOffer,
};
