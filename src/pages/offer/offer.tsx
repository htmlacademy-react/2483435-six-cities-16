import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { useChangeTitle } from '../../hooks/title';
import { getCurrentOffer } from './utils';
import { Description } from './description';
import { DataBase } from '../../components/service/data-base';
import { Neighboring } from './neighboring';
import { Photos } from './photos';
import { Map } from '../../components/map/map';

type OfferProps = {
  dataBase: DataBase;
};

const MAX_NEARBY_OFFER_COUNT = 4;

function Offer({ dataBase }: OfferProps): JSX.Element {
  const { offers, authStatus } = dataBase;
  const { id: offerId } = useParams();
  const currentOffer = getCurrentOffer(offers, offerId!)!;

  const nearOffers = dataBase.getOffersByCity(currentOffer.city.name).slice(0, MAX_NEARBY_OFFER_COUNT);
  useChangeTitle('Offer');

  return (
    <div className="page">
      <Header authStatus={authStatus} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Photos currentOffer={currentOffer} />
          <Description offer={currentOffer} />
          <Map className="offer" activeCity={currentOffer.city.name} activeOffer={currentOffer} offers={nearOffers}/>
        </section>
        <Neighboring
          currentOffer={currentOffer}
          nearOffers={nearOffers}
        />
      </main>
    </div>
  );
}

export default Offer;
