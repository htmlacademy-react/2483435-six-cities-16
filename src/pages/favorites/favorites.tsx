import { useChangeTitle } from '../../hooks/title';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import clsx from 'clsx';
import { Empty } from '../favorites/empty';
import { List } from './list';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/offers-slice';

function Favorites(): JSX.Element {
  const favorites = useAppSelector(offersSelectors.offers);
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
          {isEmptyFavorites ? <Empty /> : <List />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
