import { FullOffer } from '../../types/offer-type';

import { Comment } from '../../types/comment-type';

export const getCurrentOffer = (offers: FullOffer[], offerId: string) =>
  offers.find((offer: FullOffer) => offer.id === offerId);

export const sortByDate = (reviews: Comment[]) => {
  return reviews.sort((date1, date2) => {
    return new Date(date2.date).getTime() - new Date(date1.date).getTime();
  });
};

export const getStarsText = (star: number) =>
  `${star} + ${star > 1 ? 'stars' : 'star'}`;

export const correctName = (name: number): string => (name > 1 ? 's' : '');
