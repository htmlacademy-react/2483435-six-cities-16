import { SortSelect } from '../sort-select';
import OfferCard from '../../../components/main/offer-card/offer-card';
import { FullOffer } from '../../../types/offer-type';
import { useAppSelector } from '../../../hooks/store';
import { dispatch } from '../../../store/store';
import { activeSelectors, handleActiveOffer } from '../../../store/slices/active-slice';
import { offersByCity} from '../../../store/slices/offers-slice';

function CityOffers() {
  const city = useAppSelector(activeSelectors.city);
  const filteredOffers = useAppSelector(offersByCity);
  const handleMouseEnter = (offer: FullOffer) => {
    if (handleActiveOffer) {
      dispatch(handleActiveOffer(offer));
    }
  };

  const handleMouseLeave = () => {
    if (handleActiveOffer) {
      dispatch(handleActiveOffer());
    }
  };

  const correctEnding = filteredOffers.length > 1 ? 's' : '';

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {filteredOffers.length} place{correctEnding} to stay in {city}
      </b>
      <SortSelect />
      <div className="cities__places-list places__list tabs__content">
        {filteredOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            className="cities"
            offer={offer}
            onMouseEnter={() => {
              handleMouseEnter(offer);
            }}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
}

export default CityOffers;
