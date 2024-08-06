import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  adaptLocation, useUpdateLocation,
  useUpdateMarkers
} from './map-utils';
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
  const correctLocation = adaptLocation(offers[0].location);
  const mapRef = useRef(null);
  const map = useMap(mapRef, correctLocation);

  useUpdateLocation(map, correctLocation);
  useUpdateMarkers(map, offersForMap);

  return <section className={`${bemBlock}__map map`} ref={mapRef}></section>;
}
