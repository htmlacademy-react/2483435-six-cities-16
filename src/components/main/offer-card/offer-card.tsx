import type { ThumbnailOffer } from '../../../types/offer-type';
import { Rating } from '../rating/rating';
import { AppRoute, BemClass } from '../../../const';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../favorite-button/favorite-button';
import { upFirstLetter } from '../../../utils/utils';

type OfferCardProps = {
  bemBlock: BemClass;
  offer: ThumbnailOffer;
  onMouseEnter?: (offer: ThumbnailOffer) => void;
  onMouseLeave?: () => void;
  onClick?: (offer: ThumbnailOffer) => void;
};

function OfferCard({
  bemBlock,
  offer,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: OfferCardProps): React.ReactNode {
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

  const imgWidth = bemBlock === BemClass.Favorites ? 150 : 260;
  const imgHeight = bemBlock === BemClass.Favorites ? 110 : 200;
  const cardInfoClassName =
    bemBlock === BemClass.Favorites ? 'favorites__card-info ' : '';

  return (
    <article className={`${bemBlock}__card place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${bemBlock}__image-wrapper place-card__image-wrapper`}>
        <Link
          to={AppRoute.Offer.replace(':id', id)}
          onMouseEnter={() => onMouseEnter?.(offer)}
          onMouseLeave={() => onMouseLeave?.()}
          onClick={() => onClick?.(offer)}
        >
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
          <FavoriteButton
            bemBlock={BemClass.PlaceCard}
            isFavorite={isFavorite}
            currentOffer={offer}
          />
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

export { OfferCard };
