import { faker } from '@faker-js/faker';
import type { Comment } from '../types/comment-type';
import { createMockUserGeneral } from './user-mock';
import { FullOffer } from '../types/offer-type';

export type Comments = {
  [key: string]: Comment[];
};

export const createMockComment = (): Comment => ({
  id: crypto.randomUUID(),
  date: faker.date.anytime().toISOString(),
  user: createMockUserGeneral(),
  comment: faker.lorem.sentences({ min: 1, max: 5 }),
  rating: faker.number.int({ min: 1, max: 5 }),
});

export const generateComments = (offers: FullOffer[]) => {
  const comments: Comments = {};
  offers.forEach((offer) => {
    comments[offer.id] = Array.from(
      { length: faker.number.int({ max: 40, min: 1 }) },
      createMockComment
    );
  });
  return comments;
};
