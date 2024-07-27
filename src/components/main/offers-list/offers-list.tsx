
import DataBase from '../../service/data-base';
import OfferCard from '../offer-card/offer-card';

type OfferListType = {
  dataBase: DataBase;
}
function OffersList({dataBase}:OfferListType) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {dataBase.offers.map((offer) => (
        <OfferCard key={offer.id} className="cities" offerCard={offer} />
      ))}
    </div>
  );
}

export default OffersList;
