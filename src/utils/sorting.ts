import { FullOffer } from '../types/offer-type';

const priceLowSort = (offerA: FullOffer, offerB: FullOffer) =>
  offerA.price - offerB.price;

const priceHighSort = (offerA: FullOffer, offerB: FullOffer) =>
  offerB.price - offerA.price;

const topRatedSort = (offerA: FullOffer, offerB: FullOffer) =>
  offerB.rating - offerA.rating;

export { priceLowSort, priceHighSort, topRatedSort };
