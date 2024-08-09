import { APIRoute } from '../../../const';
import { ThumbnailOffer } from '../../../types/offer-type';
import { store } from '../../store';
import { offersActions } from '../../slices/offers-slice/offers-slice';
import { appCreateAsyncThunk } from '../../utils';

export const fetchOffersNearbyAction = appCreateAsyncThunk<void, string>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data: offers } = await api.get<ThumbnailOffer[]>(
      `${APIRoute.Offers}/${offerId}/nearby`
    );
    store.dispatch(offersActions.setNearbyOffers(offers));
  }
);
