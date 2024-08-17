import { APIRoute } from '../../const';
import type { OfferType, ThumbnailOffer } from '../../types/offer-type';
import { appCreateAsyncThunk } from './auth-actions';

const fetchOffersAction = appCreateAsyncThunk<ThumbnailOffer[], undefined>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data: offers } = await api.get<ThumbnailOffer[]>(APIRoute.Offers);
    return offers;
  }
);

const fetchOfferAction = appCreateAsyncThunk<OfferType, string>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data: offer } = await api.get<OfferType>(
      `${APIRoute.Offers}/${offerId}`
    );
    return offer;
  }
);

const fetchOffersNearbyAction = appCreateAsyncThunk<ThumbnailOffer[], string>(
  'data/fetchNearby',
  async (offerId, { extra: api }) => {
    const { data: nearbyOffers } = await api.get<ThumbnailOffer[]>(
      `${APIRoute.Offers}/${offerId}/nearby`
    );
    return nearbyOffers;
  }
);

export { fetchOffersAction, fetchOfferAction, fetchOffersNearbyAction };
