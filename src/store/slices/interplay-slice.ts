import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityName, FullOffer } from '../../types/offer-type';
import { AppDispatch } from '../../types/store-types/store-type';
import { InterplaySlice } from '../../types/store-types/slices-types';


const interplayState: InterplaySlice = {
  selectCity: 'Paris',
  activeOffer: null,
};

export const interplaySlice = createSlice({
  name: 'interplay',
  initialState: interplayState,
  reducers: {
    setSelectCity: (state, action: PayloadAction<CityName>) => {
      state.selectCity = action.payload;
    },
    setActiveOffer: (state, action: PayloadAction<FullOffer | null>) => {
      state.activeOffer = action.payload;
    },
  },
});

export const { setSelectCity, setActiveOffer } = interplaySlice.actions;

export default interplaySlice;

export const handleChangeCity = (city: CityName) => (dispatch: AppDispatch) => {
  dispatch(setSelectCity(city));
};

export const handleActiveOffer =
  (offer?: FullOffer | null) => (dispatch: AppDispatch) => {
    dispatch(setActiveOffer(offer || null));
  };
