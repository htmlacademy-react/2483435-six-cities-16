import { SortSelect } from '../sort-select';
import OfferCard from '../../../components/main/offer-card/offer-card';
import { CityName, FullOffer } from '../../../types/offer-type';
import { dataBase } from '../../../components/service/data-base';

type CityOffersProps ={
  city:CityName;
  onOfferHover?: (offer?:FullOffer) => void;
}


function CityOffers({city, onOfferHover}:CityOffersProps) {
  const offers = dataBase.getOffersByCity(city);
  const handleMouseEnter = (offer:FullOffer)=> {
    if (onOfferHover) {
      onOfferHover(offer);
    }
  };

  const handleMouseLeave = () => {
    if (onOfferHover) {
      onOfferHover();
    }
  };

const correctEnding = offers.length > 1 ? 's' : '';


  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offers.length} place{correctEnding} to stay in {city}
      </b>
      <SortSelect />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
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
