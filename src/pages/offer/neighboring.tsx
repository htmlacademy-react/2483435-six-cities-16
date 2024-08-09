import { OfferCard } from '../../components/main/offer-card/offer-card';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import type { ThumbnailOffer } from '../../types/offer-type';
import {
  activeActions,
  activeSelectors,
} from '../../store/slices/active-slice';
import { fetchGetCommentsAction } from '../../store/api-actions/comments-actions';
import { store } from '../../store/store';
import {
  fetchOfferAction,
  fetchOffersNearbyAction,
} from '../../store/api-actions/offers-actions';
import { Setting } from '../../const';

type NeighboringProps = {
  offers: ThumbnailOffer[];
};

function Neighboring({ offers }: NeighboringProps) {
  const activeOfferId = useAppSelector(activeSelectors.activeOfferId);
  offers = offers.slice(0, Setting.NearbyCount);
  const { setActiveOfferId } = useActionCreators(activeActions);

  const handleMouseClick = (offer: ThumbnailOffer) => {
    setActiveOfferId(offer.id);
    store.dispatch(fetchOfferAction(offer.id));
    store.dispatch(fetchGetCommentsAction(offer.id));
    store.dispatch(fetchOffersNearbyAction(offer.id));
  };

  return offers.length <= 1 ? (
    ''
  ) : (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {offers.map(
            (offer) =>
              offer.id !== activeOfferId && (
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

export { Neighboring };
