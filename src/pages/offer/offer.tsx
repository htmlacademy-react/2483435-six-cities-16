import { useAppSelector } from '../../hooks/store';
import { Header } from '../../components/header/header';
import ShowLoading from '../../components/main/show-loading';
import { Photos } from './photos';
import { Description } from './description';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import { Neighboring } from './neighboring';
import { useChangeTitle } from '../../hooks/title';
import { Map } from '../../components/map/map';
import { ThumbnailOffer } from '../../types/offer-type';
import {OfferType} from '../../types/offer-type';
import { MAX_NEARBY_OFFER_COUNT } from '../../const';

export type OffersMapType = (OfferType|ThumbnailOffer);

function Offer(): JSX.Element {
  const activeOffer = useAppSelector(offersSelectors.activeOffer)!;
  const comments = useAppSelector(offersSelectors.comments);
  const nearbyOffers = useAppSelector(offersSelectors.nearbyOffers).slice(0, MAX_NEARBY_OFFER_COUNT);
  const offersForMap:OffersMapType[] = [...nearbyOffers, activeOffer];

  useChangeTitle('Offer');

  if (!activeOffer || !comments) {
    return <ShowLoading />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Photos activeOffer={activeOffer} />
          <Description activeOffer={activeOffer} comments={comments} />
          <Map
            bemBlock="offer"
            activeOffer={activeOffer}
            offers={offersForMap}
          />
        </section>
        <Neighboring offers={nearbyOffers} />
      </main>
    </div>
  );
}

export default Offer;
