import { sortByDate } from '../utils';
import { Review } from './review';
import { NewReview } from './new-review';
import { useAppSelector } from '../../../hooks/store';
import { userSelectors } from '../../../store/slices/user-slice';
import { Comment } from '../../../types/comment-type';

type ReviewsProp = {
  comments: Comment[];
};
export function Reviews({ comments }: ReviewsProp) {
  const authStatus = useAppSelector(userSelectors.status);
  const isAuth = authStatus === 'AUTH';
  const sortedReviews = sortByDate(comments);
  const lastestsReviews = sortedReviews.slice(0, 10);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {lastestsReviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      {isAuth && <NewReview />}
    </section>
  );
}
