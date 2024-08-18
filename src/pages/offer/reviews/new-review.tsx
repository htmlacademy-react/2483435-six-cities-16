import { Fragment, useRef, useState } from 'react';
import { RATING, Setting } from '../../../const';
import { getStarsText } from '../utils';
import { store } from '../../../store/store';
import {
  fetchGetCommentsAction,
  fetchPostCommentsAction,
} from '../../../store/api-actions/comments-actions';
import { activeSelectors } from '../../../store/slices/active-slice';
import { useAppDispatch } from '../../../hooks/store';
import toast from 'react-hot-toast';

type NewReviewProps = HTMLFormElement & {
  rating: HTMLInputElement;
  review: HTMLFormElement;
};

const INITIAL = {
  rating: 0,
  review: '',
};

export function NewReview() {
  const [reviewForm, setReviewForm] = useState(INITIAL);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [isFormDisabled, setFormDisabled] = useState(false);

  const ratingRef = useRef<HTMLInputElement | null>(null);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useAppDispatch();

  const handleError = () => {
    setFormDisabled(false);
    setSubmitDisabled(false);
    return 'Error send review';
  };

  const handleSuccess = () => {
    setFormDisabled(false);
    return 'Review send successfully';
  };

  const handleFormInput = (evt: React.ChangeEvent<NewReviewProps>) => {
    const name = evt.target.name;
    let value: string | number = evt.target.value as string;

    if (name === 'rating') {
      value = Number(value);
    }
    setReviewForm({ ...reviewForm, [name]: value });
    setSubmitDisabled(
      reviewForm.review.length < Setting.ReviewMin ||
        reviewForm.review.length > Setting.ReviewMax ||
        !reviewForm.rating
    );
  };

  const handleFormSubmit = (evt: React.FormEvent<NewReviewProps>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const id = activeSelectors.activeOfferId(store.getState());
    setFormDisabled(true);
    setSubmitDisabled(true);

    toast.promise(
      dispatch(
        fetchPostCommentsAction({
          offerId: id,
          comment: reviewForm.review,
          rating: reviewForm.rating,
        })
      ).unwrap(),
      {
        loading: 'Sending...',
        error: handleError,
        success: handleSuccess,
      }
    );

    fetchGetCommentsAction(id);
    form.reset();
    setReviewForm(INITIAL);
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onInput={handleFormInput}
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING.map((star) => (
          <Fragment key={star.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={star.value}
              id={getStarsText(star.value)}
              type="radio"
              ref={ratingRef}
              disabled={isFormDisabled}
            />
            <label
              htmlFor={getStarsText(star.value)}
              className="reviews__rating-label form__rating-label"
              title={star.text}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        ref={commentRef}
        value={reviewForm.review}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isFormDisabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
