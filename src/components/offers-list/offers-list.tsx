import { AppProps } from '../../types/app-props-type';
import OfferCard from '../place-card/place-card';

function OffersList({ offers }: Pick<AppProps, 'offers'>) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard key={offer.id} {...offer} />
      ))}
    </div>
  );
}

export default OffersList;
