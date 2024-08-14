import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';

function FavoriteCount() {
  const favorites = useAppSelector(offersSelectors.favoriteOffers);
  return <span className="header__favorite-count">{favorites.length}</span>;
}

export { FavoriteCount };
