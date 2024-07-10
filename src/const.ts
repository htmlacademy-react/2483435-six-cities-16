export const Setting = {
  OffersCount: 5,
} as const;


export enum AppRoute {
  Main  = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}