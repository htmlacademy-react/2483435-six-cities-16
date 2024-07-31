import { faker } from '@faker-js/faker';
import type { OfferType, LocationData, FullOffer } from '../types/offer-type';
import { CITIES, GOODS } from './const-mock';
import { createMockUserGeneral } from './user-mock';

const OFFER_TYPES: OfferType[] = ['apartment', 'hotel', 'house', 'room'];

const LOC_DELTA = 0.04;
const mockLocation = ({
  latitude,
  longitude,
}: Omit<LocationData, 'zoom'>): LocationData => ({
  latitude: faker.location.latitude({
    max: latitude + LOC_DELTA,
    min: latitude - LOC_DELTA,
  }),
  longitude: faker.location.longitude({
    max: longitude + LOC_DELTA,
    min: longitude - LOC_DELTA,
  }),
  zoom: faker.number.int({ max: 10, min: 1 }),
});

export function mockFullOffer(): FullOffer {
  const type = faker.helpers.arrayElement(OFFER_TYPES);
  const city = faker.helpers.arrayElement(CITIES);

  return {
    id: crypto.randomUUID(),
    title: faker.location.streetAddress(),
    type,
    price: faker.number.int({ max: 10000, min: 100 }),
    city,
    location: mockLocation(CITIES.find((currentCity)=> city.name === currentCity.name)!.location),
    isFavorite: faker.datatype.boolean(),
    isPremium: faker.datatype.boolean(),
    rating: faker.number.int({ max: 5, min: 0 }),
    previewImage: faker.image.urlLoremFlickr({ category: type }),
    bedrooms: faker.number.int({ max: 4, min: 1 }),
    description: faker.lorem.paragraph(),
    goods: faker.helpers.arrayElements(GOODS, { min: 2, max: 4 }),
    host: createMockUserGeneral(),
    images: Array.from({ length: 5 }, () => faker.image.url()),
    maxAdults: faker.number.int({ max: 8, min: 1 }),
  };
}
