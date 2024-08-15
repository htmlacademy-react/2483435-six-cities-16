import { APIRoute } from '../../const';
import { ThumbnailOffer } from '../../types/offer-type';
import { appCreateAsyncThunk } from './auth-actions';

const fetchFavoritesAction = appCreateAsyncThunk<ThumbnailOffer[], undefined>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data: offers } = await api.get<ThumbnailOffer[]>(APIRoute.Favorite);

    return offers;
  }
);

const fetchChangeFavoriteAction = appCreateAsyncThunk<
  ThumbnailOffer,
  { offerId: ThumbnailOffer['id']; status: number }
>('data/fetchComment', async ({ offerId, status }, { extra: api }) => {
  const result = await api.post<ThumbnailOffer>(
    `${APIRoute.Favorite}/${offerId}/${status}`
  );
  return result.data;
});

export { fetchFavoritesAction, fetchChangeFavoriteAction };
