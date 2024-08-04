import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { FullOffer } from '../../types/offer-type';
import { generateOffers } from '../../mock/offer-mock';
import { Comments, generateComments } from '../../mock/comment-mock';
import { OffersSlice } from '../../types/store-types/slices-types';
import { AppDispatch } from '../../types/store-types/store-type';
import { activeSelectors } from './active-slice';

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

const offersByCity = createSelector(
  activeSelectors.city,
  offersSelectors.offers,
  (city, offers) => offers.filter((offer) => offer.city.name === city)
);

const offerById = createSelector(
  activeSelectors.offerId,
  offersSelectors.offers,
  (offerId, offers) => offers.find((offer) => offer.id === offerId)
);

const loadData = () => (dispatch: AppDispatch) => {
  const offers = generateOffers();
  dispatch(setOffers(offers));
  dispatch(setComments(generateComments(offers)));
};

export {
  offersSlice,
  offersSelectors,
  setOffers,
  setComments,
  offersActions,
  offersByCity,
  offerById,
  loadData,
};
