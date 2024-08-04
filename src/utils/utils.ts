import { FullOffer } from '../types/offer-type';

export const upFirstLetter = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

export const favorites = (offers: FullOffer[]) => offers.filter((offer) => offer.isFavorite);
