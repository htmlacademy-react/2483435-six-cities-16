import OfferCard from '../../components/main/offer-card/offer-card';
import { dataBase } from '../../components/service/data-base';
import { Offer } from '../../types/offer-type';

type NeighboringProps = {
  currentOffer: Offer;
  setActiveId: (id: string) => void;
  resetActiveId: () => void;
};

export function Neighboring({
  currentOffer,
  setActiveId,
  resetActiveId,
}: NeighboringProps) {
  const nearOffers = dataBase.getOffersByCity(currentOffer.city.name);
  return nearOffers.length <= 1 ? (
    ''
  ) : (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {nearOffers.map(
            (offer) =>
              offer.id !== currentOffer.id && (
                <OfferCard
                  key={offer.id}
                  className="near-places"
                  offerCard={offer}
                  onMouseEnter={() => setActiveId(offer.id)}
                  onMouseLeave={resetActiveId}
                />
              )
          )}
        </div>
      </section>
    </div>
  );
}
