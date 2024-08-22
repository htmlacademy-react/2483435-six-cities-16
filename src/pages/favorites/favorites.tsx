import { useChangeTitle } from '../../hooks/title';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import clsx from 'clsx';
import { FavoritesEmpty } from './favorites-empty';
import { List } from './list';
import { useAppSelector } from '../../hooks/store';
import { favoritesSelectors } from '../../store/slices/favorites-slice';
function Favorites(): JSX.Element {
  const favorites = useAppSelector(favoritesSelectors.favoritesOffers);
  const isEmptyFavorites = favorites.length === 0;
  const favoritePageClasses = clsx('page__main', 'page__main--favorites', {
    'page__main--favorites-empty': isEmptyFavorites,
  });
  const emptyClass = favorites.length === 0 ? 'page--favorites-empty' : '';
  useChangeTitle('Favorites');

  return (
    <div className={`page ${emptyClass}`}>
      <Header />
      <main className={favoritePageClasses}>
        <div className="page__favorites-container container">
          {isEmptyFavorites ? <FavoritesEmpty /> : <List />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { Favorites };
