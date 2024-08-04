import { AuthStatus } from '../../const';
import { Comments } from '../../mock/comment-mock';
import { CityName, FullOffer } from '../offer-type';

type OffersSlice = {
  offers: FullOffer[];
  comments: Comments;
};

type ActiveSlice = {
  city: CityName;
  offerId: string| null;
};

type UserSlice = {
  status: AuthStatus;
};

export type { OffersSlice, ActiveSlice, UserSlice };
