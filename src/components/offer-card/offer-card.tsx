import clsx from 'clsx';
import type { ThumbnailOffer } from '../../types/offer-type/offer-type';
import { CSSProperties } from 'react';

type OfferCardProps = Pick<
  ThumbnailOffer,
  | 'id'
  | 'title'
  | 'type'
  | 'price'
  | 'rating'
  | 'isFavorite'
  | 'isPremium'
  | 'previewImage'
>;

const upFirstLetter = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

const getRatingStyle = (rating: number): CSSProperties => ({
  width: `${Math.round(rating) * 20}%`,
});

function Offer({
  title,
  type,
  price,
  rating,
  isFavorite,
  isPremium,
  previewImage,
}: OfferCardProps): React.ReactNode {
  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const favoriteClasses = clsx('button', 'place-card__boolmark-button', {
    'place-card__bookmark-button--active': isFavorite,
  });

  return (
    <article className="cities__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favoriteClasses} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{favoriteLabel}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getRatingStyle(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{upFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default Offer;
