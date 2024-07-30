import { dataBase } from '../../../components/service/data-base';
import { sortByDate } from '../utils';
import { Review } from './review';
import { NewReview } from './new-review';

type ReviewsProps = {
  offerId: string | undefined;
};
export function Reviews({ offerId }: ReviewsProps) {
  const authStatus = dataBase.authStatus;
  const isAuth = authStatus === 'AUTH';
  const reviews = sortByDate(dataBase.getCommentsById(offerId));
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      {isAuth && <NewReview />}
    </section>
  );
}
