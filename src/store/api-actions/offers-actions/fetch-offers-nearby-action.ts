import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../../../types/store-types/store-type';
import { APIRoute } from '../../../const';
import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { ThumbnailOffer } from '../../../types/offer-type';
import { store } from '../../store';
import { offersActions } from '../../slices/offers-slice/offers-slice';

export const fetchOffersNearbyAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (offerId, { extra: api }) => {
  const { data: offers } = await api.get<ThumbnailOffer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
  store.dispatch(offersActions.setNearbyOffers(offers));
});
