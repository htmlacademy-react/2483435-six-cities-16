import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferType, ThumbnailOffer } from '../../../types/offer-type';
import { OffersSlice } from '../../../types/store-types/slices-types';
import { Comment } from '../../../types/comment-type';

const offersState: OffersSlice = {
  allOffers: [],
  activeOffer: null,
  nearbyOffers: [],
  comments: [],
};

const offersSlice = createSlice({
  name: 'offers',
  initialState: offersState,
  reducers: {
    setAllOffers: (state, action: PayloadAction<ThumbnailOffer[]>) => {
      state.allOffers = action.payload;
    },
    setActiveOffer: (state, action: PayloadAction<OfferType | null>) => {
      state.activeOffer = action.payload;
    },
    setNearbyOffers: (state, action: PayloadAction<ThumbnailOffer[]>) => {
      state.nearbyOffers = action.payload;
    },
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
  },
  selectors: {
    allOffers: (state) => state.allOffers,
    activeOffer: (state) => state.activeOffer,
    nearbyOffers: (state) => state.nearbyOffers,
    comments: (state) => state.comments,
  },
});

const offersSelectors = offersSlice.selectors;
const { setAllOffers, setActiveOffer, setNearbyOffers, setComments } =
  offersSlice.actions;
const offersActions = offersSlice.actions;

export {
  offersSlice,
  offersSelectors,
  setAllOffers,
  setActiveOffer,
  setNearbyOffers,
  setComments,
  offersActions,
};
