import { useChangeTitle } from '../../hooks/title';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import clsx from 'clsx';
import { FavoritesEmpty } from './favorites-empty';
import { List } from './list';
import { useAppSelector } from '../../hooks/store';
import { favoriteSelectors } from '../../store/slices/favorite-slice';
function Favorites(): JSX.Element {
  const favorites = useAppSelector(favoriteSelectors.favoriteOffers);
  const isEmptyFavorites = favorites.length === 0;
  const favoritePageClasses = clsx('page__main', 'page__mxain--favorites', {
    'page__main--favorites-empty': isEmptyFavorites,
  });
  useChangeTitle('Favorites');

  return (
    <div className={`page ${isEmptyFavorites}`}>
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
