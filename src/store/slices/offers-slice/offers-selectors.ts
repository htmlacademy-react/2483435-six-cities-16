import { createSelector } from '@reduxjs/toolkit';
import { FullOffer } from '../../../types/offer-type';
import { SortType } from '../../../types/sort-type';
import { priceHighSort, priceLowSort, topRatedSort } from '../../../utils/sorting';
import { activeSelectors } from '../active-slice';
import { offersSelectors } from './offers-slice';

const offersByCity = createSelector(
  activeSelectors.city,
  offersSelectors.offers,
  (city, offers) => offers.filter((offer:FullOffer) => offer.city.name === city)
);

const toSortOffers = createSelector(
  offersByCity,
  activeSelectors.sortOption,
  (offers: FullOffer[], sortType: SortType) => {
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

const favoritesOffers = createSelector(offersSelectors.offers, (offers) =>
  offers.filter((offer) => offer.isFavorite)
);

const commentsById = createSelector(
  activeSelectors.activeOffer,
  offersSelectors.comments,
  (activeOffer, comments) => comments[activeOffer!.id]
);

export { offersByCity, toSortOffers, favoritesOffers, commentsById };
