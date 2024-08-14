import { useAppSelector } from '../../hooks/store';
import { favoritesSelectors } from '../../store/slices/favorites-slice';

function FavoriteCount() {
  const favorites = useAppSelector(favoritesSelectors.favoritesOffers);
  return <span className="header__favorite-count">{favorites.length}</span>;
}

export { FavoriteCount };
