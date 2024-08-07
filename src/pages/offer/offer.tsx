import { useAppSelector } from '../../hooks/store';
import { Header } from '../../components/header/header';
import ShowLoading from '../../components/main/show-loading';
import { Photos } from './photos';
import { Description } from './description';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import { Neighboring } from './neighboring';

function Offer(): JSX.Element {
  const activeOffer = useAppSelector(offersSelectors.activeOffer);
  const comments = useAppSelector(offersSelectors.comments);
  const nearbyOffers = useAppSelector(offersSelectors.nearbyOffers);

  if (!activeOffer || !comments) return <ShowLoading />;

  // useChangeTitle('Offer');
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Photos activeOffer={activeOffer}/>
          <Description activeOffer={activeOffer} comments={comments}/>
          {/* <Map
            bemBlock="offer"
            activeOffer={activeOffer}
            nearbyOffers={nearbyOffers}
          /> */}
        </section>
        <Neighboring nearbyOffers={nearbyOffers}/>
      </main>
    </div>
  );
}

export default Offer;
