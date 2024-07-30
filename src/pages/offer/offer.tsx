import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { useChangeTitle } from '../../hooks/title';
import { getCurrentOffer } from './utils';
import { Description } from './description';
import { DataBase } from '../../components/service/data-base';
import { useState } from 'react';
import { Neighboring } from './neighboring';
import { Photos } from './photos';
import { Map } from './map';

type OfferProps = {
  dataBase: DataBase;
};

function Offer({ dataBase }: OfferProps): JSX.Element {
  const { offers, authStatus } = dataBase;
  const { id: offerId } = useParams();
  const currentOffer = getCurrentOffer(offers, offerId!)!;
  const [activeId, setActiveId] = useState('');
  dataBase.activeId = activeId;

  const resetActiveId = () => setActiveId('');
  useChangeTitle('Offer');

  return (
    <div className="page">
      <Header authStatus={authStatus} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Photos currentOffer={currentOffer} />
          <Description offer={currentOffer} />
          <Map />
        </section>
        <Neighboring currentOffer={currentOffer} setActiveId={setActiveId} resetActiveId={resetActiveId}/>
      </main>
    </div>
  );
}

export default Offer;
