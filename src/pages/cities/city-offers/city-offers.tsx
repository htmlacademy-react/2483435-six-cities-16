import { SortSelect } from '../sort-select';
import OfferCard from '../../../components/main/offer-card/offer-card';
import { useAppSelector } from '../../../hooks/store';
import { activeSelectors } from '../../../store/slices/active-slice';
import { offersByCity } from '../../../store/slices/offers-slice';

function CityOffers() {
  const city = useAppSelector(activeSelectors.city);
  const cityOffers = useAppSelector(offersByCity);
  const correctEnding = cityOffers.length > 1 ? 's' : '';

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
            className="cities"
            offer={offer}
          />
        ))}
      </div>
    </section>
  );
}

export default CityOffers;
