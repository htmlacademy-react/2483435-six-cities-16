import { FullOffer } from '../types/offer-type';

const upFirstLetter = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

const downFirstLetter = (str: string): string =>
  str[0].toLowerCase() + str.slice(1);

const favorites = (offers: FullOffer[]) =>
  offers.filter((offer) => offer.isFavorite);

export { upFirstLetter, downFirstLetter, favorites };
