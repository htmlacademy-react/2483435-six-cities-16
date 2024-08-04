import { SortSelect } from '../sort-select';
import OfferCard from '../../../components/main/offer-card/offer-card';
import { useActionCreators, useAppSelector } from '../../../hooks/store';
import { offersByCity } from '../../../store/slices/offers-slice';
import { FullOffer } from '../../../types/offer-type';
import { activeActions, activeSelectors } from '../../../store/slices/active-slice';

function CityOffers() {
  const city = useAppSelector(activeSelectors.city);
  const cityOffers = useAppSelector(offersByCity);
  const correctEnding = cityOffers.length > 1 ? 's' : '';


  const { setActiveOffer } = useActionCreators(activeActions);
  const handleMouseEnter = (offer: FullOffer) => setActiveOffer(offer);
  const handleMouseLeave = () => setActiveOffer(null);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {cityOffers.length} place{correctEnding} to stay in {city}
      </b>
      <SortSelect />
      <div className="cities__places-list places__list tabs__content">
        {cityOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            bemBlock="cities"
            offer={offer}
            onMouseEnter={() => handleMouseEnter(offer)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
}

export default CityOffers;
