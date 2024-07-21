import { faker } from '@faker-js/faker';
import { User, UserGeneral } from '../types/user-type';

const createMockUserGeneral = (): UserGeneral => ({
  avatarUrl: faker.image.avatar(),
  isPro: faker.datatype.boolean(),
  name: faker.person.fullName(),
});

const createMockUser = (): User => ({
  ...createMockUserGeneral(),
  email: faker.internet.email(),
  token: crypto.randomUUID(),
});

export { createMockUser, createMockUserGeneral };
