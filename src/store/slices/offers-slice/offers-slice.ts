import { createSlice } from '@reduxjs/toolkit';
import { OffersSlice } from '../../../types/store-types/slices-types';
import { RequestStatus, SliceName } from '../../../const';
import {
  fetchOfferAction,
  fetchOffersAction,
  fetchOffersNearbyAction,
} from '../../api-actions/offers-actions';
import { fetchGetCommentsAction } from '../../api-actions/comments-actions';
import { fetchChangeFavoriteAction } from '../../api-actions/favorites-actions';
import type { ThumbnailOffer } from '../../../types/offer-type';

const offersState: OffersSlice = {
  allOffers: [],
  activeOffer: null,
  nearbyOffers: [],
  comments: [],
  requestStatus: RequestStatus.Idle,
  error: '',
};

const changeFavorite = (
  { id, isFavorite }: Pick<ThumbnailOffer, 'id' | 'isFavorite'>,
  items: ThumbnailOffer[]
) => {
  const foundOffer = items.find((offer) => offer.id === id);

  if (foundOffer) {
    foundOffer.isFavorite = isFavorite;
  }
};

const offersSlice = createSlice({
  name: SliceName.Offers,
  initialState: offersState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.allOffers = action.payload;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.activeOffer = action.payload;
      })
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchGetCommentsAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchGetCommentsAction.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(fetchGetCommentsAction.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.comments = action.payload;
      })
      .addCase(fetchChangeFavoriteAction.fulfilled, (state, action) => {
        const changedOffer = action.payload;
        changeFavorite(changedOffer, state.allOffers);
        changeFavorite(changedOffer, state.nearbyOffers);
      });
  },
  reducers: {},
  selectors: {
    allOffers: (state) => state.allOffers,
    activeOffer: (state) => state.activeOffer,
    nearbyOffers: (state) => state.nearbyOffers,
    comments: (state) => state.comments,
  },
});

const offersSelectors = offersSlice.selectors;

export { offersSelectors, offersSlice };
