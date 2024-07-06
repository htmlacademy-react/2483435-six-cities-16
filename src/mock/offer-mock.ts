import { faker } from '@faker-js/faker';
import type {
  OfferType,
  LocationData,
  ThumbnailOffer,
} from '../types/offer-type/offer-type';
import { CITIES } from './const-mock';

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

export function mockThumbnailOffer(): ThumbnailOffer {
  const type = faker.helpers.arrayElement(OFFER_TYPES);
  const city = faker.helpers.arrayElement(CITIES);

  return {
    city,
    id: crypto.randomUUID(),
    isFavorite: faker.datatype.boolean(),
    isPremium: faker.datatype.boolean(),
    location: mockLocation(city.location),
    previewImage: faker.image.urlLoremFlickr({ category: type }),
    price: faker.number.int({ max: 10000, min: 100 }),
    rating: faker.number.int({ max: 5, min: 0 }),
    title: faker.location.streetAddress(),
    type,
  };
}
