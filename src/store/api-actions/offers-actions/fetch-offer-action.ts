import { APIRoute } from '../../../const';
import { Offer } from '../../../types/offer-type';
import { store } from '../../store';
import { offersActions } from '../../slices/offers-slice/offers-slice';
import { appCreateAsyncThunk } from '../../utils';

export const fetchOfferAction = appCreateAsyncThunk<void, string>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data: offer } = await api.get<Offer>(
      `${APIRoute.Offers}/${offerId}`
    );
    store.dispatch(offersActions.setActiveOffer(offer));
  }
);
