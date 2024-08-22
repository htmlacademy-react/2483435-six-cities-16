import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  adaptLocation,
  useUpdateLocation,
  useUpdateMarkers,
} from './map-utils';
import { useMap } from './use-map';
import type { OffersMapType } from '../../types/offer-type';
type MapProps = {
  bemBlock: string;
  offers: OffersMapType[];
};

function Map({ bemBlock, offers }: MapProps) {
  const location = offers[0].location;
  const correctLocation = adaptLocation(location);
  const mapRef = useRef(null);
  const map = useMap(mapRef, correctLocation);

  useUpdateLocation(map, correctLocation);
  useUpdateMarkers(map, offers);

  return <section className={`${bemBlock}__map map`} ref={mapRef}></section>;
}

export { Map };
