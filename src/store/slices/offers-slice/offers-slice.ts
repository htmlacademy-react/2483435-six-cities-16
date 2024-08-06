import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comments } from '../../../types/comment-type';
import { FullOffer } from '../../../types/offer-type';
import { OffersSlice } from '../../../types/store-types/slices-types';

const offersState: OffersSlice = {
  offers: [],
  comments: {},
};

const offersSlice = createSlice({
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
  selectors: {
    offers: (state) => state.offers,
    comments: (state) => state.comments,
  },
});

const offersSelectors = offersSlice.selectors;
const { setOffers, setComments } = offersSlice.actions;
const offersActions = offersSlice.actions;

export { offersSlice, offersSelectors, setOffers, setComments, offersActions };
