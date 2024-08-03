import { Link } from 'react-router-dom';
import { toStructureOffers } from './utils';
import OfferCard from '../../components/main/offer-card/offer-card';
import { useAppSelector } from '../../hooks/store';

function List() {
  const favorites = useAppSelector((state) => state.offers.offers);
  const structuredOffers = toStructureOffers(favorites);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(structuredOffers).map(([cityName, offers]) => (
          <li key={cityName} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="#">
                  <span>{cityName}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {offers.map((offer) => (
                <OfferCard key={offer.id} className="favorites" offer={offer} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { List };
