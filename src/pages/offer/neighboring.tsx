import OfferCard from '../../components/main/offer-card/offer-card';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import { MAX_NEARBY_OFFER_COUNT } from '../../const';
import { FullOffer } from '../../types/offer-type';
import {
  activeActions, activeSelectors
} from '../../store/slices/active-slice';
import { offersByCity } from '../../store/slices/offers-slice/offers-selectors';

export function Neighboring() {
  const activeOffer = useAppSelector(activeSelectors.activeOffer)!;
  const nearOffers = useAppSelector(offersByCity).slice(
    0,
    MAX_NEARBY_OFFER_COUNT
  );

  const { setActiveOfferId } = useActionCreators(activeActions);
  const handleMouseClick = (offer: FullOffer) => setActiveOfferId(offer.id);

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
              offer.id !== activeOffer!.id && (
                <OfferCard
                  key={offer.id}
                  bemBlock="near-places"
                  offer={offer}
                  onClick={() => handleMouseClick(offer)}
                />
              )
          )}
        </div>
      </section>
    </div>
  );
}
