import { OfferCard } from '../../components/main/offer-card/offer-card';
import { useAppSelector } from '../../hooks/store';
import type { ThumbnailOffer } from '../../types/offer-type';
import { activeSelectors } from '../../store/slices/active-slice';
import { BemClass, Setting } from '../../const';

type NeighboringProps = {
  offers: ThumbnailOffer[];
};

function Neighboring({ offers }: NeighboringProps) {
  const activeOfferId = useAppSelector(activeSelectors.activeOfferId);
  offers = offers.slice(0, Setting.NearbyCount);

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
                  bemBlock={BemClass.NearPlaces}
                  offer={offer}
                />
              )
          )}
        </div>
      </section>
    </div>
  );
}

export { Neighboring };
