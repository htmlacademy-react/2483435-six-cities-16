import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FullOffer } from '../../types/offer-type';
import { generateOffers } from '../../mock/offer-mock';
import { Comments, generateComments } from '../../mock/comment-mock';
import { dispatch } from '../store';
import { OffersSlice } from '../../types/store-types/slices-types';


const offersState: OffersSlice = {
  offers: [],
  comments: {},
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState: offersState,
  reducers: {
    setOffers: (state, action: PayloadAction<FullOffer[]>) => {
      state.offers = action.payload;
    },
    setComments: (state, action: PayloadAction<Comments>) => {
      state.comments = action.payload;
    },
  },
});

export const { setOffers, setComments } = offersSlice.actions;
export default offersSlice;

export const loadData = () => {
  const offers = generateOffers();

  dispatch(setOffers(offers));
  dispatch(setComments(generateComments(offers)));
};
