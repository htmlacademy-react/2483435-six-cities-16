import { Comments } from '../comment-type';
import { CityName, FullOffer, Offer } from '../offer-type';
import { SortType } from '../sort-type';
import { AuthType } from '../user-type';

type OffersSlice = {
  offers: FullOffer[];
  comments: Comments;
};

type ActiveSlice = {
  isLoading: boolean;
  sortOption: SortType;
  city: CityName;
  activeOfferId: string;
  activeOffer: Offer | null;
};

type UserSlice = {
  status: AuthType;
};

export type { OffersSlice, ActiveSlice, UserSlice };
