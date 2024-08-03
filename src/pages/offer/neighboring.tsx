import OfferCard from '../../components/main/offer-card/offer-card';
import { useAppSelector } from '../../hooks/store';
import { MAX_NEARBY_OFFER_COUNT } from '../../const';

export function Neighboring() {
  const offers = useAppSelector((state) => state.offers.offers);
  const nearOffers = offers.slice(0, MAX_NEARBY_OFFER_COUNT);
  const currentOffer = useAppSelector((state) => state.interplay.activeOffer)!;

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
