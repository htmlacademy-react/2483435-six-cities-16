import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { AppDispatch, RootState } from '../../../types/store-types/store-type';
import { AxiosInstance } from 'axios';
import { FullOffer } from '../../../types/offer-type';
import { APIRoute } from '../../../const';
import { offersActions } from '../../slices/offers-slice/offers-slice';
import { activeActions } from '../../slices/active-slice';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
dispatch(activeActions.setIsLoading(true))
  const { data: offers } = await api.get<FullOffer[]>(APIRoute.Offers);
  dispatch(activeActions.setIsLoading(false))
  dispatch(offersActions.setAllOffers(offers));
});
