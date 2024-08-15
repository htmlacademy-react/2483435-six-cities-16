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
  void,
  { offerId: string; comment: string; rating: number }
>('data/fetchComment', async ({ offerId, comment, rating }, { extra: api }) => {
  await api.post<{ comment: string; rating: number }>(
    `${APIRoute.Comments}/${offerId}`,
    { comment, rating }
  );

  store.dispatch(fetchGetCommentsAction(offerId));
});

export { fetchGetCommentsAction, fetchPostCommentsAction };
