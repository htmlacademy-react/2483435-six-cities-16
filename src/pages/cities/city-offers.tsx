import { SortSelect } from './sort-select';
import { OfferCard } from '../../components/main/offer-card/offer-card';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import {
  activeActions,
  activeSelectors,
} from '../../store/slices/active-slice';
import { toSortOffers } from '../../store/slices/offers-slice/offers-selectors';
import type { ThumbnailOffer } from '../../types/offer-type';
import { BemClass } from '../../const';

function CityOffers() {
  const city = useAppSelector(activeSelectors.city);
  const sortedOffers = useAppSelector(toSortOffers);
  const correctEnding = sortedOffers.length > 1 ? 's' : '';

  const { setActiveOfferId } = useActionCreators(activeActions);
  const handleMouseEnter = (offer: ThumbnailOffer) =>
    setActiveOfferId(offer.id);
  const handleMouseLeave = () => setActiveOfferId('');

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {sortedOffers.length} place{correctEnding} to stay in {city}
      </b>
      <SortSelect />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            bemBlock={BemClass.Cities}
            offer={offer}
            onMouseEnter={() => handleMouseEnter(offer)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
}

export { CityOffers };
