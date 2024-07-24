import clsx from 'clsx';
import { FavoriteButton } from '../../components/main/favorite-button/favorite-button';
import { Rating } from '../../components/main/rating/rating';
import { Offer } from '../../types/offer-type';
import { upFirstLetter } from '../../utils/utils';

type OfferContainerProps = {
  offer: Offer;
};

function OfferContainer({ offer }: OfferContainerProps) {
  const {
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    bedrooms,
    description,
    goods,
    host,
    maxAdults,
  } = offer;

  const isHostPro = clsx('offer__avatar-wrapper', 'user__avatar-wrapper', {
    'offer__avatar-wrapper--pro': host.isPro,
  });

  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {isPremium && (
          <div className="offer__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">{title}</h1>
          <FavoriteButton className="offer" isFavorite={isFavorite} />
        </div>
        <Rating prefix="offer" rating={rating} showValue />
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {upFirstLetter(type)}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {`${bedrooms} Bedrooms`}
          </li>
          <li className="offer__feature offer__feature--adults">
            {`Max ${maxAdults} adults`}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">€{price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            {goods.map((good) => (
              <li key={good} className="offer__inside-item">
                {good}
              </li>
            ))}
          </ul>
        </div>
        <div className="offer__host">
          <h2 className="offer__host-title">Meet the host</h2>
          <div className="offer__host-user user">
            <div className={isHostPro}>
              <img
                className="offer__avatar user__avatar"
                src={host.avatarUrl}
                width={74}
                height={74}
                alt="Host avatar"
              />
            </div>
            <span className="offer__user-name">{host.name}</span>
            <span className="offer__user-status">{host.isPro}</span>
          </div>
          <div className="offer__description">
            <p className="offer__text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { OfferContainer };
