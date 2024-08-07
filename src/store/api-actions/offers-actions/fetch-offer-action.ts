import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../../../types/store-types/store-type';
import { APIRoute } from '../../../const';
import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { Offer } from '../../../types/offer-type';
import { store } from '../../store';
import { offersActions } from '../../slices/offers-slice/offers-slice';

export const fetchOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (offerId, { extra: api }) => {
  const { data: offer } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
  store.dispatch(offersActions.setActiveOffer(offer));
});
