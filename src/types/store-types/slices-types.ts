import { Comment } from '../comment-type';

import { CityName, Offer, ThumbnailOffer } from '../offer-type';
import { SortType } from '../sort-type';
import { AuthType } from '../user-type';

type OffersSlice = {
  allOffers: ThumbnailOffer[];
  activeOffer: Offer | null;
  nearbyOffers: ThumbnailOffer[];
  comments: Comment[];
};

type ActiveSlice = {
  isLoading: boolean;
  sortOption: SortType;
  city: CityName;
  activeOfferId: string;
};

type UserSlice = {
  status: AuthType;
  userEmail: string;
};

export type { OffersSlice, ActiveSlice, UserSlice };
