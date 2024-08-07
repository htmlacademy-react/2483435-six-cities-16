import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../../../types/store-types/store-type';
import { APIRoute } from '../../../const';
import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { store } from '../../store';
import { offersActions } from '../../slices/offers-slice/offers-slice';
import { Comment } from '../../../types/comment-type';

export const fetchGetCommentsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchComments', async (offerId, { extra: api }) => {
  const { data: comments } = await api.get<Comment[]>(
    `${APIRoute.Comments}/${offerId}`
  );
  store.dispatch(offersActions.setComments(comments));
});


export const fetchPostCommentsAction = createAsyncThunk<
  void,
  { offerId:string, comment: string; rating: number },
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchComment', async ({offerId, comment, rating }, { extra: api }) => {
  await api.post<{  comment: string; rating: number }>(`${APIRoute.Comments}/${offerId}`, { comment, rating });

});
