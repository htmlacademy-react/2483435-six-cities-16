import { useState } from 'react';
import { SortSelect } from '../sort-select';
import OfferCard from '../../../components/main/offer-card/offer-card';
import { CityName, ThumbnailOffer } from '../../../types/offer-type';
import { dataBase } from '../../../components/service/data-base';

type CityOffersProps = {
  city: CityName;
  offers: ThumbnailOffer[];
};

function CityOffers({ city, offers }: CityOffersProps) {
  const [activeId, setActiveId] = useState('');
  const resetActiveId = () => setActiveId('');
  dataBase.activeId = activeId;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offers.length} places to stay in {city}
      </b>
      <SortSelect />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            className="cities"
            offerCard={offer}
            onMouseEnter={() => setActiveId(offer.id)}
            onMouseLeave={resetActiveId}
          />
        ))}
      </div>
    </section>
  );
}

export default CityOffers;
