import { Header } from '../../components/header/header';
import { useChangeTitle } from '../../hooks/title';
import { Description } from './description';
import { Neighboring } from './neighboring';
import { Photos } from './photos';
import { Map } from '../../components/map/map';
import { useAppSelector } from '../../components/service/store/hocks';
import { MAX_NEARBY_OFFER_COUNT } from '../../const';


function Offer(): JSX.Element {


  const city = useAppSelector((state)=>state.rentSlice.city);
  const offers = useAppSelector((state)=>state.rentSlice.offers);
  const nearOffers = offers.slice(0, MAX_NEARBY_OFFER_COUNT);
  const currentOffer = useAppSelector((state)=>state.rentSlice.activeOffer);
  useChangeTitle('Offer');

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <Photos/>
          <Description/>
          <Map className="offer" activeCity={city} activeOffer={currentOffer} offers={nearOffers}/>
        </section>
        <Neighboring/>
      </main>
    </div>
  );
}

export default Offer;
