import { CitiesEmpty } from './cities-empty';
import { CityOffers } from './city-offers';
import { Map } from '../../components/map/map';
import { ThumbnailOffer } from '../../types/offer-type';

type CityContainerProps = {
  isEmpty: boolean;
  cityOffers: ThumbnailOffer[];
};

function CityContainer({ isEmpty, cityOffers }: CityContainerProps) {
  return isEmpty ? (
    <CitiesEmpty />
  ) : (
    <>
      <CityOffers />
      <div className="cities__right-section">
        {cityOffers.length > 0 && <Map bemBlock="cities" offers={cityOffers} />}
      </div>
    </>
  );
}

export { CityContainer };
