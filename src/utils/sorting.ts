import type { ThumbnailOffer } from '../types/offer-type';

const priceLowSort = (offerA: ThumbnailOffer, offerB: ThumbnailOffer) =>
  offerA.price - offerB.price;

const priceHighSort = (offerA: ThumbnailOffer, offerB: ThumbnailOffer) =>
  offerB.price - offerA.price;

const topRatedSort = (offerA: ThumbnailOffer, offerB: ThumbnailOffer) =>
  offerB.rating - offerA.rating;

export { priceLowSort, priceHighSort, topRatedSort };
