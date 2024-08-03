import { SortSelect } from '../sort-select';
import OfferCard from '../../../components/main/offer-card/offer-card';
import { FullOffer } from '../../../types/offer-type';
import { useAppSelector } from '../../../hooks/store';
import { getOffersByCity } from '../../../utils/utils';
import { dispatch } from '../../../store/store';
import { handleActiveOffer } from '../../../store/slices/interplay-slice';

function CityOffers() {
  const city = useAppSelector((state) => state.interplay.selectCity);
  const offers = useAppSelector((state) => state.offers.offers);
  const filteredOffers = getOffersByCity(city, offers);
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
