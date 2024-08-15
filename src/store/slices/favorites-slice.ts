import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus, SliceName } from '../../const';
import { FavoritesSlice } from '../../types/store-types/slices-types';
import {} from '../api-actions/offers-actions';
import {
  fetchChangeFavoriteAction,
  fetchFavoritesAction,
} from '../api-actions/favorites-actions';

const favoritesState: FavoritesSlice = {
  favoritesOffers: [],
  requestStatus: RequestStatus.Idle,
};

const favoritesSlice = createSlice({
  name: SliceName.Favorites,
  initialState: favoritesState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.favoritesOffers = action.payload;
      });
    builder
      .addCase(fetchChangeFavoriteAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchChangeFavoriteAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoritesOffers.push(action.payload);
        } else {
          state.favoritesOffers = state.favoritesOffers.filter(
            (offer) => offer.id !== action.payload.id
          );
        }
      })
      .addCase(fetchChangeFavoriteAction.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
  selectors: {
    favoritesOffers: (state) => state.favoritesOffers,
    requestStatus: (state) => state.requestStatus,
  },
});

const favoritesSelectors = favoritesSlice.selectors;

export { favoritesSlice, favoritesSelectors };
