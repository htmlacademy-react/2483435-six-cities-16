import { useChangeTitle } from '../../hooks/title';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import clsx from 'clsx';
import { Empty } from '../favorites/empty';
import { List } from './list';
import { DataBase } from '../../components/service/data-base';

export type FavoritesProps = {
  dataBase: DataBase;
};

function Favorites({ dataBase }: FavoritesProps): JSX.Element {
  const { authStatus } = dataBase;
  const favoritesCount = dataBase.getFavoritesOffers().length;
  const isEmptyFavorites = favoritesCount === 0;
  const favoritePageClasses = clsx('page__main', 'page__mxain--favorites', {
    'page__main--favorites-empty': isEmptyFavorites,
  });
  useChangeTitle('Favorites');

  return (
    <div className={`page ${isEmptyFavorites}`}>
      <Header authStatus={authStatus} />
      <main className={favoritePageClasses}>
        <div className="page__favorites-container container">
          {isEmptyFavorites ? <Empty /> : <List />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
