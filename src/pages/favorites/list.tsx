import { Link } from 'react-router-dom';
import { toStructureOffers } from './favorites-utils';
import { OfferCard } from '../../components/main/offer-card/offer-card';
import { useAppSelector } from '../../hooks/store';
import { activeActions } from '../../store/slices/active-slice';
import type { CityName, ThumbnailOffer } from '../../types/offer-type';
import { AppRoute, BemClass } from '../../const';
import { dispatch, store } from '../../store/store';
import { fetchGetCommentsAction } from '../../store/api-actions/comments-actions';
import {
  fetchOfferAction,
  fetchOffersNearbyAction,
} from '../../store/api-actions/offers-actions';
import { favoritesSelectors } from '../../store/slices/favorites-slice';

function List() {
  const favorites = useAppSelector(favoritesSelectors.favoritesOffers);
  const structuredOffers = toStructureOffers(favorites);

  const handleCityClick = (city: CityName) =>
    dispatch(activeActions.setCity(city));

  const handleMouseClick = (offer: ThumbnailOffer) => {
    store.dispatch(fetchOfferAction(offer.id));
    store.dispatch(fetchGetCommentsAction(offer.id));
    store.dispatch(fetchOffersNearbyAction(offer.id));
  };

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(structuredOffers).map(([cityName, offers]) => (
          <li key={cityName} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link
                  className="locations__item-link"
                  onClick={() => handleCityClick(cityName)}
                  to={AppRoute.Main}
                >
                  <span>{cityName}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {offers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  bemBlock={BemClass.Favorites}
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
