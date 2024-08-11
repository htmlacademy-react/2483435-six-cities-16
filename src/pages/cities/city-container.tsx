import { CitiesEmpty } from './cities-empty';
import { CityOffers } from './city-offers';
import { Map } from '../../components/map/map';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import { ThumbnailOffer } from '../../types/offer-type';

type CityContainerProps = {
  isEmpty: boolean;
  cityOffers: ThumbnailOffer[];
};

function CityContainer({ isEmpty, cityOffers }: CityContainerProps) {
  const activeOffer = useAppSelector(offersSelectors.activeOffer);

  return isEmpty ? (
    <CitiesEmpty />
  ) : (
    <>
      <CityOffers />
      <div className="cities__right-section">
        <Map bemBlock="cities" activeOffer={activeOffer} offers={cityOffers} />
      </div>
    </>
  );
}

export { CityContainer };
