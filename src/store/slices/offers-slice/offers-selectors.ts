import { createSelector } from '@reduxjs/toolkit';
import { activeSelectors } from '../active-slice';
import { offersSelectors, setComments, setOffers } from './offers-slice';
import { generateOffers } from '../../../mock/offer-mock';
import { generateComments } from '../../../mock/comment-mock';
import { AppDispatch } from '../../../types/store-types/store-type';
import { FullOffer } from '../../../types/offer-type';
import { SortType } from '../../../types/sort-type';
import {
  priceHighSort,
  priceLowSort,
  topRatedSort,
} from '../../../utils/sorting';

const offersByCity = createSelector(
  activeSelectors.city,
  offersSelectors.offers,
  (city, offers) => offers.filter((offer) => offer.city.name === city)
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

const loadData = () => (dispatch: AppDispatch) => {
  const offers = generateOffers();
  dispatch(setOffers(offers));
  dispatch(setComments(generateComments(offers)));
};

export { offersByCity, toSortOffers, favoritesOffers, commentsById, loadData };
