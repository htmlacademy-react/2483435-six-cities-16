import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityName, FullOffer } from '../../types/offer-type';
import { AppDispatch } from '../../types/store-types/store-type';
import { ActiveSlice } from '../../types/store-types/slices-types';

const activeState: ActiveSlice = {
  city: 'Paris',
  offer: null,
};

const activeSlice = createSlice({
  name: 'active',
  initialState: activeState,
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    setOffer: (state, action: PayloadAction<FullOffer | null>) => {
      state.offer = action.payload;
    },
  },
  selectors: {
    city: (state) => state.city,
    offer: (state) => state.offer,
  },
});

const activeSelectors = activeSlice.selectors;
const { setCity, setOffer } = activeSlice.actions;

const handleChangeCity = (city: CityName) => (dispatch: AppDispatch) => {
  dispatch(setCity(city));
};

const handleActiveOffer =
  (offer?: FullOffer | null) => (dispatch: AppDispatch) => {
    dispatch(setOffer(offer || null));
  };

export {
  activeSlice,
  activeSelectors,
  setCity,
  setOffer,
  handleChangeCity,
  handleActiveOffer,
};
