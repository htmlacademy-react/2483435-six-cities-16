import { Link } from 'react-router-dom';
import { toStructureOffers } from './favorites-utils';
import OfferCard from '../../components/main/offer-card/offer-card';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import { activeActions } from '../../store/slices/active-slice';
import { FullOffer } from '../../types/offer-type';
import { favoritesOffers } from '../../store/slices/offers-slice/offers-selectors';

function List() {
  const favorites = useAppSelector(favoritesOffers);
  const structuredOffers = toStructureOffers(favorites);
  const { setActiveOffer } = useActionCreators(activeActions);

  const handleMouseClick = (offer: FullOffer) => setActiveOffer(offer);
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
                <OfferCard
                  key={offer.id}
                  bemBlock="favorites"
                  offer={offer}
                  onClick={() => handleMouseClick(offer)}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { List };
