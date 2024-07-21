import { faker } from '@faker-js/faker';
import type { Comment } from '../types/comment-type';
import { createMockUserGeneral } from './user-mock';

export const createMockComment = (): Comment => ({
  id: crypto.randomUUID(),
  date: faker.date.anytime().toISOString(),
  user: createMockUserGeneral(),
  comment: faker.lorem.sentences({ min: 1, max: 5 }),
  rating: faker.number.int({ min: 1, max: 5 }),
});
