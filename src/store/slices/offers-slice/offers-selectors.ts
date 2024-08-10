import { createSelector } from '@reduxjs/toolkit';
import type { ThumbnailOffer } from '../../../types/offer-type';
import type { SortType } from '../../../types/sort-type';
import {
  priceHighSort,
  priceLowSort,
  topRatedSort,
} from '../../../utils/sorting';
import { activeSelectors } from '../active-slice';
import { offersSelectors } from './offers-slice';

const offersByCity = createSelector(
  activeSelectors.city,
  offersSelectors.allOffers,
  (city, offers) =>
    offers.filter((offer: ThumbnailOffer) => offer.city.name === city)
);

const toSortOffers = createSelector(
  offersByCity,
  activeSelectors.sortOption,
  (offers: ThumbnailOffer[], sortType: SortType) => {
    if (sortType === 'Popular') {
      return offers;
    }
    switch (sortType) {
      case 'PriceHighToLow':
        return [...offers].sort(priceHighSort);
      case 'PriceLowToHigh':
        return [...offers].sort(priceLowSort);
      case 'TopRatedFirst':
        return [...offers].sort(topRatedSort);
    }
  }
);

const favoritesOffers = createSelector(offersSelectors.allOffers, (offers) =>
  offers.filter((offer) => offer.isFavorite)
);

export { offersByCity, toSortOffers, favoritesOffers };
