import { sortByDate } from '../utils';
import { Review } from './review';
import { NewReview } from './new-review';
import { useAppSelector } from '../../../hooks/store';
import { getCommentsById } from '../../../utils/utils';

export function Reviews() {
  const currentOffer = useAppSelector((state) => state.interplay.activeOffer)!;
  const authStatus = useAppSelector((state) => state.user.status);
  const isAuth = authStatus === 'AUTH';
  const comments = useAppSelector((state) => state.offers.comments);
  const reviews = getCommentsById(currentOffer, comments);
  const sortedReviews = sortByDate(reviews);
  const lastestsReviews = sortedReviews.slice(0, 10);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·{' '}
        <span className="reviews__amount">{sortedReviews.length}</span>
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
