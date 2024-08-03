import { CityName, FullOffer } from '../types/offer-type';
import { CITIES } from '../mock/const-mock';
import { Comments } from '../mock/comment-mock';

export const upFirstLetter = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

export const getOffersByCity = (
  cityName: CityName,
  offers: FullOffer[]
): FullOffer[] => offers.filter((offer) => offer.city.name === cityName);

export const getLocation = (cityName: CityName) => CITIES.find((city) => city.name === cityName)!.location;

export const getCommentsById = (offer: FullOffer, comments: Comments) => {
  const currentComments = Object.entries(comments).find((comment)=>comment[0] === offer.id);
  return currentComments? currentComments[1] : [];
}

export const favorites = (offers: FullOffer[]) => offers.filter((offer) => offer.isFavorite);
