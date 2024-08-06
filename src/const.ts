export const Setting = {
  OffersCount: 30,
} as const;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}


export const RATING = [
  { value: 5, text: 'perfect' },
  { value: 4, text: 'good' },
  { value: 3, text: 'not bad' },
  { value: 2, text: 'badly' },
  { value: 1, text: 'terrible' },
];

export const AUTH_STATUS = ['AUTH', 'NO_AUTH', 'UNKNOWN'];

export type AuthStatus = 'AUTH' | 'NO_AUTH' | 'UNKNOWN';

export enum MapMarker {
  DefaultMarker = '../markup/img/pin.svg',
  ActiveMarker = '../markup/img/pin-active.svg',
}

export const MAX_NEARBY_OFFER_COUNT = 4;

export const SortOption = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
};
