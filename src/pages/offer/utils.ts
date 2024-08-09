import type { FullOffer } from '../../types/offer-type';
import type { Comment } from '../../types/comment-type';

const getCurrentOffer = (offers: FullOffer[], offerId: string) =>
  offers.find((offer: FullOffer) => offer.id === offerId);

const sortByDate = (reviews: Comment[]) =>
  [...reviews].sort(
    (date1, date2) =>
      new Date(date2.date).getTime() - new Date(date1.date).getTime()
  );

const getStarsText = (star: number) =>
  `${star} + ${star > 1 ? 'stars' : 'star'}`;

const correctName = (name: number): string => (name > 1 ? 's' : '');

export { getCurrentOffer, sortByDate, getStarsText, correctName };
