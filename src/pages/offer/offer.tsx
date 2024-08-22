import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { Header } from '../../components/header/header';
import { ShowLoading } from '../../components/main/show-loading';
import { Photos } from './photos';
import { Description } from './description';
import {
  offersSelectors,
  offersSlice,
} from '../../store/slices/offers-slice/offers-slice';
import { Neighboring } from './neighboring';
import { useChangeTitle } from '../../hooks/title';
import { Map } from '../../components/map/map';
import { Setting } from '../../const';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { fetchGetCommentsAction } from '../../store/api-actions/comments-actions';
import {
  fetchOfferAction,
  fetchOffersNearbyAction,
} from '../../store/api-actions/offers-actions';
import { setActiveOfferId } from '../../store/slices/active-slice';
import { OffersMapType } from '../../types/offer-type';

function Offer(): JSX.Element {
  const { id = '' } = useParams();
  const isError = useAppSelector(offersSelectors.isError);
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

  useEffect(
    () => () => {
      setTimeout(() => dispatch(offersSlice.actions.resetError()));
    },
    [dispatch]
  );

  if (isError) {
    return <Navigate to="/404" />;
  }

  const mapOffers: OffersMapType[] = [...nearbyOffers];
  if (activeOffer) {
    mapOffers.push(activeOffer);
  }
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
              {mapOffers.length > 0 && (
                <Map bemBlock="offer" offers={mapOffers} />
              )}
            </>
          )}
        </section>
        <Neighboring offers={nearbyOffers} />
      </main>
    </div>
  );
}

export { Offer };
