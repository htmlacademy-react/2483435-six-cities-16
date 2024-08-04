import { Header } from '../../components/header/header';
import { useChangeTitle } from '../../hooks/title';
import { Description } from './description';
import { Neighboring } from './neighboring';
import { Photos } from './photos';
import { Map } from '../../components/map/map';
import { useAppSelector } from '../../hooks/store';
import { MAX_NEARBY_OFFER_COUNT } from '../../const';
import { activeSelectors } from '../../store/slices/active-slice';
import { offersSelectors } from '../../store/slices/offers-slice';

function Offer(): JSX.Element {
  const offers = useAppSelector(offersSelectors.offers);
  const nearOffers = offers.slice(0, MAX_NEARBY_OFFER_COUNT);
  const currentOffer = useAppSelector(activeSelectors.offer);
  useChangeTitle('Offer');

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Photos />
          <Description />
          <Map
            className="offer"
            offers={nearOffers}
            activeOffer={currentOffer}
          />
        </section>
        <Neighboring />
      </main>
    </div>
  );
}

export default Offer;
