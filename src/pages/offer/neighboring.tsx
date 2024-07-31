import OfferCard from '../../components/main/offer-card/offer-card';
import { FullOffer, Offer } from '../../types/offer-type';

type NeighboringProps = {
  currentOffer: Offer;
  nearOffers: FullOffer[];
};


export function Neighboring({ currentOffer, nearOffers }: NeighboringProps) {

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
                  offer={offer}
                />
              )
          )}
        </div>
      </section>
    </div>
  );
}
