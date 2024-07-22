import { AppProps } from '../../types/app-props-type';
import OfferCard from '../offer-card/offer-card';

function OffersList({ offers }: Pick<AppProps, 'offers'>) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard key={offer.id} className='cities' offerCard={offer} />
      ))}
    </div>
  );
}

export default OffersList;
