import { APIRoute } from '../../const';
import { store } from '../store';
import type { Comment } from '../../types/comment-type';
import { appCreateAsyncThunk } from './auth-actions';

const fetchGetCommentsAction = appCreateAsyncThunk<Comment[], string>(
  'data/fetchComments',
  async (offerId, { extra: api }) => {
    const { data: comments } = await api.get<Comment[]>(
      `${APIRoute.Comments}/${offerId}`
    );
    return comments;
  }
);

const fetchPostCommentsAction = appCreateAsyncThunk<
  Comment,
  { offerId: string; comment: string; rating: number }
>('data/fetchComment', async ({ offerId, comment, rating }, { extra: api }) => {
  const res = await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, {
    comment,
    rating,
  });

  store.dispatch(fetchGetCommentsAction(offerId));
  return res.data;
});

export { fetchGetCommentsAction, fetchPostCommentsAction };
