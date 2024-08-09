import dayjs from 'dayjs';
import { Rating } from '../../../components/main/rating/rating';
import type { Comment } from '../../../types/comment-type';

type ReviewProps = {
  review: Comment;
};

function Review({ review }: ReviewProps) {
  const { user, rating, comment, date } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating prefix="reviews" rating={rating} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {dayjs(date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

export { Review };
