import clsx from 'clsx';
import { AppRoute, AuthStatus, BemClass } from '../../../const';
import { AllOffersType } from '../../../types/offer-type';
import { dispatch } from '../../../store/store';
import {
  fetchOffersAction,
  fetchSetFavoriteAction,
} from '../../../store/api-actions/offers-actions';
import { useAppSelector } from '../../../hooks/store';
import { userSelectors } from '../../../store/slices/user-slice';
import { useNavigate } from 'react-router-dom';

type FavoriteButtonProps = {
  bemBlock: BemClass;
  isFavorite: boolean;
  currentOffer: AllOffersType;
};

function FavoriteButton({
  bemBlock,
  isFavorite,
  currentOffer,
}: FavoriteButtonProps) {
  const navigate = useNavigate();
  const authStatus = useAppSelector(userSelectors.status);
  const isAuth = authStatus === AuthStatus.Auth;
  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const favoriteClasses = clsx('button', `${bemBlock}__bookmark-button`, {
    [`${bemBlock}__bookmark-button--active`]: isFavorite,
  });

  const handleFavoriteButtonClick = (offer: AllOffersType) => {
    if (isAuth) {
      const status: 1 | 0 = offer.isFavorite ? 0 : 1;
      dispatch(fetchSetFavoriteAction({ offer, status }));
      dispatch(fetchOffersAction());
    } else {
      navigate(AppRoute.Login);
    }
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
