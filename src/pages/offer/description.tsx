import clsx from 'clsx';
import { FavoriteButton } from '../../components/main/favorite-button/favorite-button';
import { Rating } from '../../components/main/rating/rating';
import { upFirstLetter } from '../../utils/utils';
import { correctName } from './utils';
import { Reviews } from './reviews/reviews';
import { PhotosProps } from './photos';
import ShowLoading from '../../components/main/show-loading';
import { Comment } from '../../types/comment-type';

type DescriptionProps = PhotosProps & {
  comments: Comment[]
};
function Description({ activeOffer, comments }: DescriptionProps) {
  if (!activeOffer) {
    return <ShowLoading />;
  }
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
  } = activeOffer;

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
            {`${bedrooms} Bedroom${correctName(bedrooms)}`}
          </li>
          <li className="offer__feature offer__feature--adults">
            {`Max ${maxAdults} adult${correctName(maxAdults)}`}
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
            {host.isPro && <span className="offer__user-status">Pro</span>}
          </div>
          <div className="offer__description">
            <p className="offer__text">{description}</p>
          </div>
        </div>
        <Reviews comments={comments}/>
      </div>
    </div>
  );
}

export { Description };
