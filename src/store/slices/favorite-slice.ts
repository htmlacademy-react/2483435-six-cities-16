import { PayloadAction, createSlice } from '@reduxjs/toolkit/react';
import { FavoriteSlice } from '../../types/store-types/slices-types';
import { ThumbnailOffer } from '../../types/offer-type';

const favoriteState: FavoriteSlice = {
  favoriteOffers: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: favoriteState,
  reducers: {
    setFavorite: (state, action: PayloadAction<ThumbnailOffer[]>) => {
      state.favoriteOffers = action.payload;
    },
  },
  selectors: {
    favoriteOffers: (state) => state.favoriteOffers,
  },
});

const favoriteSelectors = favoriteSlice.selectors;
const { setFavorite } = favoriteSlice.actions;
const favoriteActions = favoriteSlice.actions;

export { favoriteSlice, favoriteSelectors, favoriteActions, setFavorite };
