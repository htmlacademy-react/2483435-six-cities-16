import { AuthStatus } from '../../const';
import { Comments } from '../../mock/comment-mock';
import { CityName, FullOffer } from '../offer-type';

type OffersSlice = {
  offers: FullOffer[];
  comments: Comments;
};

type InterplaySlice = {
  selectCity: CityName;
  activeOffer: FullOffer | null;
};

type UserSlice = {
  status: AuthStatus;
};

export type { OffersSlice, InterplaySlice, UserSlice };
