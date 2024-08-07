import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../../../types/store-types/store-type';
import { APIRoute } from '../../../const';
import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { store } from '../../store';
import { offersActions } from '../../slices/offers-slice/offers-slice';
import { Comment} from'../../../types/comment-type';

export const fetchCommentsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (offerId, { extra: api }) => {
  const { data: comments } = await api.get<Comment[]>(`${APIRoute.Comments}/${offerId}`);
  store.dispatch(offersActions.setComments(comments));
});
