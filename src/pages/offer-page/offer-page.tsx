import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { AuthStatus } from '../../const';
import { useChangeTitle } from '../../hooks/title';
import { getCurrentOffer, getNearOffers } from './offer-page-utils';
import OfferCard from '../../components/main/offer-card/offer-card';
import { OfferContainer } from './offer-container';
import { dataBase } from '../..';

type OfferPageProps = {
  authStatus: AuthStatus;
};

function OfferPage({ authStatus }: OfferPageProps): JSX.Element {
  const offers = dataBase.offers;
  const { id: offerId } = useParams();

  const currentOffer = getCurrentOffer(offers, offerId!)!;
  const nearOffers = getNearOffers(offers, offerId!);

  useChangeTitle('Offer');

  return (
    <div className="page">
      <Header authStatus={authStatus}/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <OfferContainer offer={currentOffer} />

          <section className="offer__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearOffers.map((offerCard) => (
                <OfferCard
                  key={offerCard.id}
                  className="near-places"
                  offerCard={offerCard}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
