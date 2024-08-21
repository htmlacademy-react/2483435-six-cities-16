import { RequestStatus } from '../../const';
import type { Comment } from '../comment-type';
import type { CityName, OfferType, ThumbnailOffer } from '../offer-type';
import type { SortType } from '../sort-type';
import type { AuthType } from '../user-type';

type OffersSlice = {
  allOffers: ThumbnailOffer[];
  activeOffer: OfferType | null;
  nearbyOffers: ThumbnailOffer[];
  comments: Comment[];
  requestStatus: RequestStatus;
  isError: string;
};

type FavoritesSlice = {
  favoritesOffers: ThumbnailOffer[];
  requestStatus: RequestStatus;
};

type ActiveSlice = {
  sortOption: SortType;
  city: CityName;
  activeOfferId: string;
};

type UserSlice = {
  authStatus: AuthType;
  userEmail: string;
};

export type { OffersSlice, ActiveSlice, UserSlice, FavoritesSlice };
