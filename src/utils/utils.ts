import { CITIES } from '../const';
import { CityName } from '../types/offer-type';

const upFirstLetter = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

const downFirstLetter = (str: string): string =>
  str[0].toLowerCase() + str.slice(1);

const getRandomCity = (cities: typeof CITIES): CityName =>
  cities[Math.floor(Math.random() * cities.length)];

export { upFirstLetter, downFirstLetter, getRandomCity };
