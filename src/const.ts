const Setting = {
  NearbyCount: 3,
  TimeoutError: 2000,
} as const;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const RATING = [
  { value: 5, text: 'perfect' },
  { value: 4, text: 'good' },
  { value: 3, text: 'not bad' },
  { value: 2, text: 'badly' },
  { value: 1, text: 'terrible' },
];

const SortOption = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
};

enum BemClass {
  Cities = 'cities',
  Offer = 'offer',
  Favorites = 'favorites',
  PlaceCard = 'place-card'
}

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum MapMarker {
  DefaultMarker = '../markup/img/pin.svg',
  ActiveMarker = '../markup/img/pin-active.svg',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export {
  Setting,
  CITIES,
  RATING,
  SortOption,
  BemClass,
  AppRoute,
  MapMarker,
  AuthStatus,
  APIRoute,
};
