import { Offer } from '../../types/offer-type';

import { Comment } from '../../types/comment-type';

export const getCurrentOffer = (offers: Offer[], offerId: string) =>
  offers.find((offer: Offer) => offer.id === offerId);

// export const getNearOffers = (offers: ThumbnailOffer[], offerId: string) => {
//   const currentCity = offers.find(
//     (offer: ThumbnailOffer) => offer.id === offerId
//   )!.city.name;
//   const nearOffers: ThumbnailOffer[] = [];

//   offers.map(
//     (offer: ThumbnailOffer) =>
//       offer.city.name === currentCity && nearOffers.push(offer)
//   );

//   return nearOffers;
// };

export const sortByDate = (reviews: Comment[]) => reviews.sort(
  (date1, date2) =>
    new Date(date2.date).getTime() - new Date(date1.date).getTime()
);

export const getStarsText = (star: number) =>
  `${star} + ${star > 1 ? 'stars' : 'star'}`;

export const correctName = (name: number): string => (name > 1 ? 's' : '');
