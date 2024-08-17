import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  adaptLocation,
  useUpdateLocation,
  useUpdateMarkers,
} from './map-utils';
import { useMap } from './use-map';
import type { OfferForMap, OfferType } from '../../types/offer-type';
type MapProps = {
  bemBlock: string;
  activeOffer: OfferType | null;
  offers: OfferForMap[];
};

function Map({ bemBlock, activeOffer, offers }: MapProps) {
  const location = (activeOffer ? activeOffer : offers[offers.length / 2])!
    .location;
  const correctLocation = adaptLocation(location);
  console.log(location);
  const mapRef = useRef(null);
  const map = useMap(mapRef, correctLocation);

  useUpdateLocation(map, correctLocation);
  useUpdateMarkers(map, offers);

  return <section className={`${bemBlock}__map map`} ref={mapRef}></section>;
}

export { Map };
