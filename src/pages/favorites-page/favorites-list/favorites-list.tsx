import { Link } from 'react-router-dom';
import { toStructureOffers } from './utils';
import OfferCard from '../../../components/main/offer-card/offer-card';
import { dataBase } from '../../..';


function FavoritesList() {
  const favoritesOffers = dataBase.getFavoritesOffers();
  const structuredOffers = toStructureOffers(favoritesOffers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(structuredOffers).map(([cityName, offer]) => (
          <li key={cityName} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="#">
                  <span>{cityName}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {offer.map((offerCard) => (
                <OfferCard
                  key={offerCard.id}
                  className="favorites"
                  offerCard={offerCard}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { FavoritesList };
