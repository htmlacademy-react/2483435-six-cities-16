import { sortByDate } from '../utils';
import { Review } from './review';
import { NewReview } from './new-review';
import { useAppSelector } from '../../../hooks/store';
import { userSelectors } from '../../../store/slices/user-slice';
import { commentsById } from '../../../store/slices/offers-slice/offers-selectors';

export function Reviews() {
  const authStatus = useAppSelector(userSelectors.status);
  const isAuth = authStatus === 'AUTH';
  const comments = structuredClone(useAppSelector(commentsById));
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
