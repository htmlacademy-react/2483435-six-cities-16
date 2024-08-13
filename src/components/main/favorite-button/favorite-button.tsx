import clsx from 'clsx';
import { AppRoute, AuthStatus, BemClass } from '../../../const';
import { OfferType, ThumbnailOffer } from '../../../types/offer-type';
import { useAppSelector } from '../../../hooks/store';
import { userSelectors } from '../../../store/slices/user-slice';
import { useNavigate } from 'react-router-dom';
import { dispatch } from '../../../store/store';
import { fetchChangeFavoriteAction } from '../../../store/api-actions/offers-actions';
import { useState } from 'react';

type FavoriteButtonProps = {
  bemBlock: BemClass;
  isFavorite: boolean;
  currentOffer: ThumbnailOffer | OfferType;
};

function FavoriteButton({
  bemBlock,
  isFavorite,
  currentOffer,
}: FavoriteButtonProps) {
  const navigate = useNavigate();
  const authStatus = useAppSelector(userSelectors.status);
  const isAuth = authStatus === AuthStatus.Auth;
  const [isOn, setOn] = useState(isFavorite);
  const isActive = isAuth && isOn;
  const favoriteLabel = `${isActive ? 'In' : 'To'} bookmarks`;
  const buttonClass = `${bemBlock}__bookmark-button`;

  const favoriteClasses = clsx(
    buttonClass,
    {
      [`${buttonClass}--active`]: isActive,
    },
    'button'
  );

  const handleFavoriteButtonClick = (offer: ThumbnailOffer | OfferType) => {
    if (!isAuth) {
      return navigate(AppRoute.Login);
    }
    setOn((prev) => !prev);
    dispatch(fetchChangeFavoriteAction({ offer, status: Number(!isActive) }));
  };

  const imgWidth = bemBlock === BemClass.Offer ? 31 : 18;
  const imgHeight = bemBlock === BemClass.Offer ? 33 : 19;

  return (
    <button
      className={favoriteClasses}
      type="button"
      onClick={() => handleFavoriteButtonClick(currentOffer)}
    >
      <svg
        className={`${bemBlock}__bookmark-icon`}
        width={imgWidth}
        height={imgHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}

export { FavoriteButton };
