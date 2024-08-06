import { Header } from '../../components/header/header';
import { useChangeTitle } from '../../hooks/title';
import { Description } from './description';
import { Neighboring } from './neighboring';
import { Photos } from './photos';
import { Map } from '../../components/map/map';

function Offer(): JSX.Element {
  useChangeTitle('Offer');

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Photos />
          <Description />
          <Map
            bemBlock="offer"
          />
        </section>
        <Neighboring />
      </main>
    </div>
  );
}

export default Offer;
