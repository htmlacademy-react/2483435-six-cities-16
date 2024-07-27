import { useChangeTitle } from '../../hooks/title';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { AuthStatus } from '../../const';
import clsx from 'clsx';
import { FavoritesEmpty } from './favorites-empty';
import { FavoritesList } from './favorites-list/favorites-list';
import { dataBase } from '../..';


export type FavoritesPageProps = {
  authStatus: AuthStatus;
};

function FavoritesPage({
  authStatus,
}: FavoritesPageProps): JSX.Element {
  const favoritesCount = dataBase.getFavoritesOffers().length;
  const isEmptyFavorites = favoritesCount === 0;
  const favoritePageClasses = clsx('page__main', 'page__mxain--favorites', {
    'page__main--favorites-empty': isEmptyFavorites,
  });
  useChangeTitle('Favorites');

  return (
    <div className={`page ${isEmptyFavorites}`}>
      <Header authStatus={authStatus}/>
      <main className={favoritePageClasses}>
        <div className="page__favorites-container container">
          {isEmptyFavorites ? (
            <FavoritesEmpty />
          ) : (
            <FavoritesList/>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
