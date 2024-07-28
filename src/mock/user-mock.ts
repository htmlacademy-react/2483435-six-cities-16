import { faker } from '@faker-js/faker';
import { User, UserGeneral } from '../types/user-type';
import { AUTH_STATUS, AuthStatus } from '../const';

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

export const getAuthStatus = ():AuthStatus => faker.helpers.arrayElement(AUTH_STATUS) as AuthStatus;

export { createMockUser, createMockUserGeneral };
