import { APIRoute } from '../../const';
import type { OfferType, ThumbnailOffer } from '../../types/offer-type';
import { activeActions } from '../slices/active-slice';
import { offersActions } from '../slices/offers-slice/offers-slice';
import { dispatch, store } from '../store';
import { appCreateAsyncThunk } from '../utils';

const fetchOffersAction = appCreateAsyncThunk<void, undefined>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(activeActions.setIsLoading(true));
    const { data: offers } = await api.get<ThumbnailOffer[]>(APIRoute.Offers);
    dispatch(activeActions.setIsLoading(false));
    dispatch(offersActions.setAllOffers(offers));
  }
);

const fetchOfferAction = appCreateAsyncThunk<void, string>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data: offer } = await api.get<OfferType>(
      `${APIRoute.Offers}/${offerId}`
    );
    store.dispatch(offersActions.setActiveOffer(offer));
  }
);

const fetchOffersNearbyAction = appCreateAsyncThunk<void, string>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data: offers } = await api.get<ThumbnailOffer[]>(
      `${APIRoute.Offers}/${offerId}/nearby`
    );
    store.dispatch(offersActions.setNearbyOffers(offers));
  }
);

const fetchFavoritesAction = appCreateAsyncThunk<void, undefined>(
  'data/fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(activeActions.setIsLoading(true));
    const { data: offers } = await api.get<ThumbnailOffer[]>(APIRoute.Favorite);
    dispatch(activeActions.setIsLoading(false));
    dispatch(offersActions.setFavorite(offers));
  }
);

const fetchChangeFavoriteAction = appCreateAsyncThunk<
  void,
  { offer: ThumbnailOffer | OfferType; status: number }
>('data/fetchComment', async ({ offer, status }, { extra: api }) => {
  await api.post<ThumbnailOffer | OfferType>(
    `${APIRoute.Favorite}/${offer.id}/${status}`
  );
  dispatch(fetchOffersAction());
  dispatch(fetchFavoritesAction());
  dispatch(fetchOfferAction(offer.id));
});

export {
  fetchOffersAction,
  fetchOfferAction,
  fetchOffersNearbyAction,
  fetchFavoritesAction,
  fetchChangeFavoriteAction,
};
