import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  adaptLocation,
  getLocation,
  useUpdateLocation,
  useUpdateMarkers,
} from './map-utils';
import { activeSelectors } from '../../store/slices/active-slice';
import { useAppSelector } from '../../hooks/store';
import { useMap } from './use-map';
import { MAX_NEARBY_OFFER_COUNT } from '../../const';
import { offersByCity } from '../../store/slices/offers-slice/offers-selectors';

type MapProps = {
  bemBlock: string;
};

export function Map({ bemBlock }: MapProps) {
  const offers = useAppSelector(offersByCity);
  const offersForMap =
    bemBlock === 'cities' ? offers : offers.slice(0, MAX_NEARBY_OFFER_COUNT);
  const city = useAppSelector(activeSelectors.city);
  const correctLocation = adaptLocation(getLocation(city));
  const mapRef = useRef(null);
  const map = useMap(mapRef, correctLocation);

  useUpdateLocation(map, correctLocation);
  useUpdateMarkers(map, offersForMap);

  return <section className={`${bemBlock}__map map`} ref={mapRef}></section>;
}
