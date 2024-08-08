import { FullOffer } from '../../../types/offer-type';
import { APIRoute } from '../../../const';
import { offersActions } from '../../slices/offers-slice/offers-slice';
import { activeActions } from '../../slices/active-slice';
import { appCreateAsyncThunk } from '../../utils';

export const fetchOffersAction = appCreateAsyncThunk<void, undefined>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(activeActions.setIsLoading(true));
    const { data: offers } = await api.get<FullOffer[]>(APIRoute.Offers);
    dispatch(activeActions.setIsLoading(false));
    dispatch(offersActions.setAllOffers(offers));
  }
);
