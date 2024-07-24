import { useChangeTitle } from '../../hooks/title';
import { Header } from '../../components/header/header';
import { ThumbnailOffer } from '../../types/offer-type';
import { Footer } from '../../components/footer/footer';
import { AuthStatus } from '../../const';
import clsx from 'clsx';
import { FavoritesEmpty } from './favorites-empty';
import { FavoritesList } from './favorites-list/favorites-list';

export type FavoritesPageProps = {
  authStatus: AuthStatus;
  favoritesOffers: ThumbnailOffer[];
};

function FavoritesPage({
  authStatus,
  favoritesOffers,
}: FavoritesPageProps): JSX.Element {
  const favoritesCount = favoritesOffers.length;
  const isEmptyFavorites = favoritesOffers.length === 0;
  const favoritePageClasses = clsx('page__main', 'page__mxain--favorites', {
    'page__main--favorites-empty': isEmptyFavorites,
  });
  useChangeTitle('Favorites');

  return (
    <div className={`page ${isEmptyFavorites}`}>
      <Header authStatus={authStatus} favoritesCount={favoritesCount} />
      <main className={favoritePageClasses}>
        <div className="page__favorites-container container">
          {isEmptyFavorites ? (
            <FavoritesEmpty />
          ) : (
            <FavoritesList offers={favoritesOffers} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
