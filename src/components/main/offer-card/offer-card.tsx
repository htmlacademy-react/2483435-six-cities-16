import type { ThumbnailOffer } from '../../../types/offer-type';
import { Rating } from '../rating/rating';
import { AppRoute } from '../../../const';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../favorite-button/favorite-button';
import { upFirstLetter } from '../../../utils/utils';

type OfferCardProps = {
  className: string;
  offer: ThumbnailOffer;
  onMouseEnter?: (offer: ThumbnailOffer) => void;
  onMouseLeave?: () => void;
};

const FAVORITES_CLASS_NAME = 'favorites';

function OfferCard({ className, offer, onMouseEnter, onMouseLeave}: OfferCardProps): React.ReactNode {
  const {
    id,
    title,
    type,
    price,
    rating,
    isFavorite,
    isPremium,
    previewImage,
  } = offer;

  const imgWidth = className === FAVORITES_CLASS_NAME ? 150 : 260;
  const imgHeight = className === FAVORITES_CLASS_NAME ? 110 : 200;
  const cardInfoClassName =
    className === FAVORITES_CLASS_NAME ? 'favorites__card-info ' : '';

  return (
    <article className={`${className}__card place-card`} onMouseEnter={()=>onMouseEnter?.(offer)} onMouseLeave={()=>onMouseLeave?.()}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(':id', id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgWidth}
            height={imgHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${cardInfoClassName}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton className="place-card" isFavorite={isFavorite} />
        </div>
        <Rating prefix="place-card" rating={rating} />
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{upFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
