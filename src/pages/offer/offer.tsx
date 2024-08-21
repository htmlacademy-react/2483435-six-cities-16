import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { Header } from '../../components/header/header';
import { ShowLoading } from '../../components/main/show-loading';
import { Photos } from './photos';
import { Description } from './description';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import { Neighboring } from './neighboring';
import { useChangeTitle } from '../../hooks/title';
import { Map } from '../../components/map/map';
import { Setting } from '../../const';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetCommentsAction } from '../../store/api-actions/comments-actions';
import {
  fetchOfferAction,
  fetchOffersNearbyAction,
} from '../../store/api-actions/offers-actions';
import { setActiveOfferId } from '../../store/slices/active-slice';

function Offer(): JSX.Element {
  const { id = '' } = useParams();
  const activeOffer = useAppSelector(offersSelectors.activeOffer);
  const comments = useAppSelector(offersSelectors.comments);
  const nearbyOffers = useAppSelector(offersSelectors.nearbyOffers).slice(
    0,
    Setting.NearbyCount
  );
  useChangeTitle('Offer');

  const dispatch = useAppDispatch();
  const currentId = activeOffer?.id ?? '';

  useEffect(() => {
    if (currentId !== id) {
      dispatch(setActiveOfferId(id));
      Promise.all([
        dispatch(fetchOfferAction(id)).unwrap(),
        dispatch(fetchGetCommentsAction(id)).unwrap(),
        dispatch(fetchOffersNearbyAction(id)).unwrap(),
      ]);
    }
  }, [id, dispatch, currentId]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          {!activeOffer ? (
            <ShowLoading />
          ) : (
            <>
              <Photos activeOffer={activeOffer} />
              <Description activeOffer={activeOffer} comments={comments} />
              <Map
                bemBlock="offer"
                activeOffer={activeOffer}
                offers={[...nearbyOffers, activeOffer]}
              />
            </>
          )}
        </section>
        <Neighboring offers={nearbyOffers} />
      </main>
    </div>
  );
}

export { Offer };
